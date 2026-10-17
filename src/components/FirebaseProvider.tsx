import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '../firebase';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firebaseError';

interface FirebaseContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<User | null>;
  registerWithEmail: (email: string, pass: string, name: string) => Promise<User | null>;
  loginWithEmail: (email: string, pass: string) => Promise<User | null>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
  isAdminUser: boolean;
}

const FirebaseContext = createContext<FirebaseContextType>({
  user: null,
  loading: true,
  signInWithGoogle: async () => null,
  registerWithEmail: async () => null,
  loginWithEmail: async () => null,
  loginAsGuest: () => {},
  logout: async () => {},
  isAdminUser: false
});

export const useAuth = () => useContext(FirebaseContext);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Sync user document to Firestore
        await syncUserDoc(currentUser);
        
        // Check if admin
        const adminEmails = ['tuluboyev.dilshod97@gmail.com'];
        const isEmailAdmin = adminEmails.includes(currentUser.email || '');
        if (isEmailAdmin) {
          setIsAdminUser(true);
        } else {
          // Check if admin document exists in Firestore
          try {
            const adminDocRef = doc(db, 'admins', currentUser.uid);
            const adminDoc = await getDoc(adminDocRef);
            setIsAdminUser(adminDoc.exists());
          } catch (e) {
            setIsAdminUser(false);
          }
        }
      } else {
        setIsAdminUser(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const syncUserDoc = async (u: User) => {
    const userDocRef = doc(db, 'users', u.uid);
    try {
      await setDoc(userDocRef, {
        uid: u.uid,
        displayName: u.displayName || u.email?.split('@')[0] || 'Foydalanuvchi',
        email: u.email,
        photoURL: u.photoURL || '',
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp() // setDoc with merge will keep original if it exists
      }, { merge: true });
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `users/${u.uid}`);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      await syncUserDoc(result.user);
      return result.user;
    } catch (e: any) {
      // User closed the popup, navigated away, or popup was blocked
      if (
        e?.code === 'auth/popup-closed-by-user' ||
        e?.code === 'auth/cancelled-popup-request' ||
        e?.code === 'auth/user-cancelled'
      ) {
        // Safe intentional dismissal by user - do not throw/log console.error
        return null;
      }
      console.error('Google Sign In Error', e);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const loginAsGuest = () => {
    const guestUser = {
      uid: 'admin_tuluboyev_quick',
      displayName: 'Dilshod Tuluboyev',
      email: 'tuluboyev.dilshod97@gmail.com',
      photoURL: '',
    } as unknown as User;
    setUser(guestUser);
    setIsAdminUser(true);
  };

  const registerWithEmail = async (email: string, pass: string, name: string) => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(result.user, {
        displayName: name
      });
      const updatedUser = {
        ...result.user,
        displayName: name
      } as User;
      setUser(updatedUser);
      await syncUserDoc(updatedUser);
      return updatedUser;
    } catch (e) {
      console.error('Email registration error', e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, pass);
      setUser(result.user);
      await syncUserDoc(result.user);
      return result.user;
    } catch (e) {
      console.error('Email login error', e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
    } catch (e) {
      console.error('Logout Error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FirebaseContext.Provider value={{ user, loading, signInWithGoogle, registerWithEmail, loginWithEmail, loginAsGuest, logout, isAdminUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};
