import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Search,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  Shuffle,
  X,
  Scale,
  Sparkles,
  Info
} from 'lucide-react';
import {
  LEGAL_TERMS,
  ALPHABET_LETTERS,
  LegalTerm
} from '../data/legalDictionary';

interface YuridikLugatViewProps {
  onBack: () => void;
}

const FAVORITES_STORAGE_KEY = 'yuridik_lugat_favorites_v1';

export const YuridikLugatView: React.FC<YuridikLugatViewProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('Hammasi');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Favorites state persisted to localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopy = (term: LegalTerm) => {
    const text = `${term.term}\n\nTa'rif: ${term.definition}\n${term.example ? `Misol: ${term.example}\n` : ''}Manba: ${term.source}`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Pick a random term to help with study
  const handleRandomTerm = () => {
    if (LEGAL_TERMS.length === 0) return;
    const randomIndex = Math.floor(Math.random() * LEGAL_TERMS.length);
    const random = LEGAL_TERMS[randomIndex];
    setSelectedLetter('Hammasi');
    setOnlyFavorites(false);
    setSearchTerm('');
    setHighlightedId(random.id);

    setTimeout(() => {
      const el = document.getElementById(`term-${random.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    setTimeout(() => setHighlightedId(null), 3000);
  };

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return LEGAL_TERMS.filter((term) => {
      if (onlyFavorites && !favorites.includes(term.id)) {
        return false;
      }
      if (selectedLetter !== 'Hammasi' && term.letter !== selectedLetter) {
        return false;
      }
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTerm = term.term.toLowerCase().includes(query);
        const matchesDef = term.definition.toLowerCase().includes(query);
        const matchesSource = term.source.toLowerCase().includes(query);
        const matchesEtym = term.etymology?.toLowerCase().includes(query) ?? false;
        const matchesEx = term.example?.toLowerCase().includes(query) ?? false;
        return matchesTerm || matchesDef || matchesSource || matchesEtym || matchesEx;
      }
      return true;
    });
  }, [searchTerm, selectedLetter, onlyFavorites, favorites]);

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, LegalTerm[]> = {};
    filteredTerms.forEach((term) => {
      const letter = term.letter || term.term.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1E1A16] flex flex-col font-sans selection:bg-[#8C6B38] selection:text-white pb-16">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#EAE5DD] shadow-xs">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2.5 rounded-xl border border-[#EAE5DD] bg-white hover:bg-[#F2ECE1] text-[#736B60] hover:text-[#1E1A16] transition-colors cursor-pointer"
              title="Asosiy sahifaga qaytish"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-[#1E1A16] tracking-tight font-serif flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#8C6B38]" />
                  Yuridik Lug‘at
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#8C6B38]/10 text-[#8C6B38] border border-[#8C6B38]/20">
                  {LEGAL_TERMS.length} ta atama
                </span>
              </div>
              <p className="text-xs text-[#736B60] hidden sm:block">
                8–11-sinf darsliklari va O‘zbekiston qonunchiligi asosidagi rasmiy ta’riflar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomTerm}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white border border-[#EAE5DD] hover:border-[#8C6B38] text-[#524B40] hover:text-[#8C6B38] transition-all shadow-xs cursor-pointer"
              title="Tasodifiy atamani ko‘rish"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#8C6B38]" />
              <span className="hidden md:inline">Tasodifiy atama</span>
            </button>

            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all shadow-xs cursor-pointer ${
                onlyFavorites
                  ? 'bg-[#8C6B38] text-white border-[#8C6B38]'
                  : 'bg-white border-[#EAE5DD] text-[#524B40] hover:border-[#8C6B38]'
              }`}
            >
              {onlyFavorites ? (
                <BookmarkCheck className="w-3.5 h-3.5 text-white" />
              ) : (
                <Bookmark className="w-3.5 h-3.5 text-[#8C6B38]" />
              )}
              <span>Saqlanganlar</span>
              {favorites.length > 0 && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    onlyFavorites ? 'bg-white text-[#8C6B38]' : 'bg-[#8C6B38]/15 text-[#8C6B38]'
                  }`}
                >
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8">
        {/* Banner Section */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#1E1A16] to-[#2D261E] text-white p-6 sm:p-8 mb-6 overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif leading-snug mb-2">
              Huquqiy atamalar va tayanch tushunchalar
            </h2>
            <p className="text-sm text-[#D1C9BC] leading-relaxed">
              Maktab darsliklari (8, 9, 10, 11-sinf «Davlat va huquq asoslari») hamda Konstitutsiya,
              Fuqarolik, Mehnat, Jinoyat va Oila kodekslaridagi barcha rasmiy terminlar bir joyda.
            </p>
          </div>

          <div className="absolute -right-6 -bottom-8 opacity-15 pointer-events-none">
            <BookOpen className="w-64 h-64 text-[#8C6B38]" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Atama nomi, qonuniy ta'rif, misol yoki manba bo'yicha qidiring..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-13 pl-12 pr-10 bg-white border border-[#EAE5DD] rounded-xl text-sm sm:text-base focus:outline-none focus:border-[#8C6B38] focus:ring-2 focus:ring-[#8C6B38]/20 transition-all shadow-xs"
          />
          <Search className="w-5 h-5 text-[#8C6B38] absolute left-4 top-4" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3.5 p-1 rounded-md text-[#A39C93] hover:text-[#1E1A16] hover:bg-[#F2ECE1] transition-colors"
              title="Qidiruvni tozalash"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Alphabet Ribbon */}
        <div className="bg-white border border-[#EAE5DD] rounded-xl p-2.5 mb-6 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-[#736B60] mb-2 px-1">
            <span className="font-semibold text-[#1E1A16]">Alifbo bo‘yicha tanlash:</span>
            {selectedLetter !== 'Hammasi' && (
              <button
                onClick={() => setSelectedLetter('Hammasi')}
                className="text-[#8C6B38] hover:underline font-semibold text-[11px]"
              >
                Barchasini ko‘rsatish
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {ALPHABET_LETTERS.map((letter) => {
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`min-w-8 h-8 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#8C6B38] text-white shadow-2xs'
                      : 'bg-[#FBF9F4] text-[#524B40] hover:bg-[#F0EAE1] hover:text-[#1E1A16]'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Summary Bar */}
        <div className="flex items-center justify-between text-xs text-[#736B60] mb-4 px-1">
          <div>
            Natijalar: <span className="font-bold text-[#1E1A16]">{filteredTerms.length}</span> ta
            atama
            {selectedLetter !== 'Hammasi' && (
              <span> • Harf: <b>{selectedLetter}</b></span>
            )}
            {onlyFavorites && <span> • Faqat saqlanganlar</span>}
          </div>
          {(selectedLetter !== 'Hammasi' ||
            searchTerm ||
            onlyFavorites) && (
            <button
              onClick={() => {
                setSelectedLetter('Hammasi');
                setSearchTerm('');
                setOnlyFavorites(false);
              }}
              className="text-[#8C6B38] hover:underline font-medium"
            >
              Filtrlarni tozalash
            </button>
          )}
        </div>

        {/* Terms List Grouped by Alphabet */}
        {!isReady ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white p-6 rounded-2xl border border-[#EAE5DD] space-y-3">
                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : filteredTerms.length > 0 ? (
          <div className="space-y-8">
            {Object.keys(groupedTerms)
              .sort()
              .map((letter) => {
                const terms = groupedTerms[letter];
                return (
                  <section key={letter} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#8C6B38] text-white flex items-center justify-center font-bold text-sm font-serif shadow-2xs">
                        {letter}
                      </div>
                      <div className="h-px bg-[#EAE5DD] flex-1" />
                      <span className="text-xs text-[#A39C93] font-medium">
                        {terms.length} ta atama
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {terms.map((term) => {
                        const isFav = favorites.includes(term.id);
                        const isCopied = copiedId === term.id;
                        const isHighlighted = highlightedId === term.id;

                        return (
                          <div
                            key={term.id}
                            id={`term-${term.id}`}
                            className={`bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between shadow-xs hover:shadow-md ${
                              isHighlighted
                                ? 'border-[#8C6B38] ring-2 ring-[#8C6B38]/30 bg-[#FFFDF9]'
                                : 'border-[#EAE5DD] hover:border-[#D5CDC0]'
                            }`}
                          >
                            <div>
                              {/* Card Header: Category badge & Actions */}
                              <div className="flex items-start justify-between gap-3 mb-2.5">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  <span
                                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                                      term.category === 'Konstitutsiya'
                                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                                        : term.category === '8-sinf'
                                        ? 'bg-blue-50 text-blue-800 border-blue-200'
                                        : term.category === '9-sinf'
                                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                        : term.category === '10-sinf'
                                        ? 'bg-purple-50 text-purple-800 border-purple-200'
                                        : term.category === '11-sinf'
                                        ? 'bg-rose-50 text-rose-800 border-rose-200'
                                        : 'bg-stone-100 text-stone-800 border-stone-200'
                                    }`}
                                  >
                                    {term.category}
                                  </span>
                                  {term.etymology && (
                                    <span className="text-[10px] text-[#736B60] italic bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#EAE5DD]">
                                      {term.etymology}
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-center gap-1 shrink-0">
                                  <button
                                    onClick={() => handleCopy(term)}
                                    className="p-1.5 rounded-lg text-[#8C6B38] hover:bg-[#F2ECE1] transition-colors"
                                    title="Atamani nusxalash"
                                  >
                                    {isCopied ? (
                                      <Check className="w-4 h-4 text-emerald-600" />
                                    ) : (
                                      <Copy className="w-4 h-4" />
                                    )}
                                  </button>

                                  <button
                                    onClick={() => toggleFavorite(term.id)}
                                    className={`p-1.5 rounded-lg transition-colors ${
                                      isFav
                                        ? 'text-[#8C6B38] bg-[#8C6B38]/10'
                                        : 'text-[#A39C93] hover:text-[#8C6B38] hover:bg-[#F2ECE1]'
                                    }`}
                                    title={isFav ? "Saqlanganlardan o'chirish" : "Lug'atga saqlash"}
                                  >
                                    {isFav ? (
                                      <BookmarkCheck className="w-4 h-4 fill-current" />
                                    ) : (
                                      <Bookmark className="w-4 h-4" />
                                    )}
                                  </button>
                                </div>
                              </div>

                              {/* Term Title */}
                              <h3 className="text-base sm:text-lg font-extrabold text-[#1E1A16] font-serif mb-2 leading-snug">
                                {term.term}
                              </h3>

                              {/* Term Definition */}
                              <p className="text-sm text-[#423C33] leading-relaxed mb-3">
                                {term.definition}
                              </p>

                              {/* Practical Example / DTM note if available */}
                              {term.example && (
                                <div className="bg-[#FAF7F0] rounded-xl p-3 text-xs text-[#524B40] border border-[#EAE5DD]/70 mb-3 flex items-start gap-2">
                                  <Info className="w-4 h-4 text-[#8C6B38] shrink-0 mt-0.5" />
                                  <div className="leading-relaxed">
                                    <strong className="font-semibold text-[#1E1A16]">
                                      Amaliyotda / Misol:
                                    </strong>{' '}
                                    {term.example}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Card Footer: Source */}
                            <div className="pt-2.5 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#736B60]">
                              <span className="font-medium truncate" title={term.source}>
                                📖 {term.source}
                              </span>
                              {isCopied && (
                                <span className="text-[10px] text-emerald-600 font-bold ml-2 shrink-0 animate-fade-in">
                                  Nusxalandi!
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="bg-white rounded-2xl border border-[#EAE5DD] p-10 text-center shadow-xs">
            <BookOpen className="w-14 h-14 text-[#DDD7CD] mx-auto mb-3" />
            <h3 className="text-[#1E1A16] font-bold text-lg mb-1">
              Hech qanday atama topilmadi
            </h3>
            <p className="text-sm text-[#736B60] max-w-md mx-auto mb-5">
              Qidiruv so‘zini o‘zgartirib ko‘ring yoki alifbo va toifa filtrlarini bekor qiling.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLetter('Hammasi');
                setOnlyFavorites(false);
              }}
              className="px-4 py-2 bg-[#8C6B38] text-white text-xs font-semibold rounded-xl hover:bg-[#73572D] transition-colors cursor-pointer"
            >
              Barcha atamalarni ko‘rsatish
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
