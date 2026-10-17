import React, { useState } from 'react';
import { X, Search, BookMarked, Calendar, User, Building, Landmark, Scale, CheckCircle } from 'lucide-react';
import { CHEAT_SHEET_ITEMS } from '../data/cheatSheet';
import { LegalCheatItem } from '../types';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredItems = CHEAT_SHEET_ITEMS.filter((item: LegalCheatItem) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      item.title.toLowerCase().includes(query) ||
      item.value.toLowerCase().includes(query) ||
      item.details.toLowerCase().includes(query) ||
      item.article.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const categories = [
    { id: 'all', label: 'Barchasi', icon: BookMarked },
    { id: 'yosh', label: 'Yosh mezonlari', icon: User },
    { id: 'muddat', label: 'Muhim muddatlar', icon: Calendar },
    { id: 'sud', label: 'Sud & Javobgarlik', icon: Scale },
    { id: 'davlat', label: 'Davlat organlari', icon: Building },
    { id: 'saylov', label: 'Saylov va muddatlar', icon: Landmark }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        id="cheatsheet-modal"
        className="relative w-full max-w-3xl bg-white border border-[#E3DED6] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-[#2B251E]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EAE5DD] bg-[#FAF8F5]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#5C5042]">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1E1A16]">Huquqiy Shpargalka & Muhim Mezonlar</h2>
              <p className="text-xs text-[#736B60]">
                DTM testlarida eng ko‘p uchraydigan yoshlar, muddatlar va huquqiy normalar
              </p>
            </div>
          </div>
          <button
            id="close-cheatsheet-btn"
            onClick={onClose}
            className="p-2 text-[#736B60] hover:text-[#1E1A16] rounded-lg hover:bg-[#F4F1EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Categories */}
        <div className="p-5 border-b border-[#EAE5DD] bg-[#F7F5F0] space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8479]" />
            <input
              type="text"
              id="cheatsheet-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qidirish: masalan 14 yosh, da'vo muddati, 7 yil, aliment..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DDD7CD] rounded-xl text-sm text-[#1E1A16] placeholder-[#8C8479] focus:outline-none focus:border-[#5C5042] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={`cat-${cat.id}-${idx}`}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-[#5C5042] text-white shadow-xs'
                      : 'bg-white text-[#554D43] border border-[#DDD7CD] hover:bg-[#F4F1EA] hover:text-[#1E1A16]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3 bg-white">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#736B60]">
              <p className="text-sm">So‘rovingiz bo‘yicha ma’lumot topilmadi.</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={`cheat-${item.id}-${idx}`}
                id={`cheat-item-${item.id}`}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#B5A998] transition-all hover:shadow-xs"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8]">
                      {item.title}
                    </span>
                    <span className="font-semibold text-sm text-[#1E1A16]">{item.value}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5C5042] bg-white px-2 py-0.5 rounded border border-[#DDD7CD] shrink-0 font-medium">
                    {item.article}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#EAE5DD] bg-[#FAF8F5] flex items-center justify-between text-xs text-[#736B60]">
          <span>Jami mezonlar: {filteredItems.length} ta</span>
          <button
            id="cheatsheet-gotit-btn"
            onClick={onClose}
            className="px-4 py-2 bg-[#5C5042] hover:bg-[#4B4033] text-white rounded-lg font-medium transition-colors"
          >
            Tushundim, yopish
          </button>
        </div>
      </div>
    </div>
  );
};
