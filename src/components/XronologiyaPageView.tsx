import React, { useState } from 'react';
import { ArrowLeft, History, Search, Calendar, Sparkles, Filter } from 'lucide-react';
import { CHRONOLOGY_EVENTS } from '../data/legalChronology';

const CHRONOLOGY_SKETCH_SRC = '/assets/images/chronology_sketch.jpg';
const CHRONOLOGY_SKETCH_FALLBACK = '/assets/images/chronology_sketch_1789969869630.jpg';

interface XronologiyaPageViewProps {
  onBack: () => void;
}

export const XronologiyaPageView: React.FC<XronologiyaPageViewProps> = ({ onBack }) => {
  const [chronologySearch, setChronologySearch] = useState('');
  const [chronologyFilter, setChronologyFilter] = useState<string>('all');
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const filteredChronology = CHRONOLOGY_EVENTS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(chronologySearch.toLowerCase()) ||
      item.year.includes(chronologySearch) ||
      item.description.toLowerCase().includes(chronologySearch.toLowerCase()) ||
      (item.dateExact && item.dateExact.toLowerCase().includes(chronologySearch.toLowerCase()));

    const matchesFilter = chronologyFilter === 'all' || item.category === chronologyFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1E1A16] flex flex-col font-sans">
      {/* Book Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DD] px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#1E1A16] border border-[#DDD7CD] text-xs font-bold uppercase tracking-wider shadow-2xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Bosh sahifaga</span>
          </button>
          <div className="h-6 w-[1px] bg-[#DDD7CD] hidden sm:block" />
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] flex items-center justify-center text-[#8C6B38]">
              <History className="w-5 h-5 text-[#8C6B38]" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#1E1A16] tracking-tight">
                Huquqiy va Tarixiy Xronologiya
              </h1>
              <p className="text-xs text-[#736B60] hidden sm:block">
                O‘zbekiston Respublikasi konstitutsiyaviy va qonunchilik taraqqiyoti yillari
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-48 sm:w-72 hidden md:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736B60]" />
          <input
            type="text"
            placeholder="Sana yoki voqeani qidirish..."
            value={chronologySearch}
            onChange={(e) => setChronologySearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#DDD7CD] rounded-xl text-xs text-[#1E1A16] placeholder-[#736B60] focus:outline-none focus:border-[#8C6B38]"
          />
        </div>
      </header>

      {/* Main Content Area - Technical Timeline */}
      <main className="flex-1 w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 space-y-8">
        {/* Intro Banner */}
        <div className="relative rounded-2xl bg-[#FAF7F0] border border-[#DDD7CD] p-6 sm:p-8 space-y-4 shadow-2xs overflow-hidden">
          {/* Historical Legal Scroll, Quill Pen & Hourglass Sketch Background */}
          <div className="absolute top-0 right-0 bottom-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-[45%] z-0 select-none pointer-events-none overflow-hidden hidden md:flex items-end justify-end">
            <picture className="block h-full w-auto">
              <source srcSet="/assets/images/chronology_sketch.avif" type="image/avif" />
              <source srcSet="/assets/images/chronology_sketch.webp" type="image/webp" />
              <img
                src={CHRONOLOGY_SKETCH_SRC}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('1789969869630')) {
                    target.src = CHRONOLOGY_SKETCH_FALLBACK;
                  }
                }}
                alt="Tarixiy huquqiy qo‘lyozma o‘rami, pero va qumsoat qalam tasviri"
                className="block m-0 p-0 h-full w-auto object-contain object-right-bottom opacity-80 sm:opacity-85 contrast-125 transition-opacity mix-blend-multiply"
                style={{ 
                  mixBlendMode: 'multiply',
                  maskImage: 'linear-gradient(to right, transparent, black 65%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 65%)',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
                referrerPolicy="no-referrer"
                decoding="async"
                fetchPriority="high"
                loading="eager"
              />
            </picture>
          </div>

          <div className="relative z-10 max-w-full md:max-w-[50%] lg:max-w-[55%] space-y-3">
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] px-3 py-1 rounded-md">
              Tarixiy Xronologiya Bazasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1A16] tracking-tight">
              Huquqiy Islohotlar va Muhim Sanalar
            </h2>
            <p className="text-sm text-[#595248] leading-relaxed">
              O‘zbekiston Respublikasining qabul qilingan qonunlari, yangilangan Konstitutsiyasi va davlat ramzlari tarixiga oid barcha muhim sanalar to‘plami. DTM imtihonlarida eng ko‘p uchraydigan yillar.
            </p>
          </div>

          <div className="relative z-10 md:hidden pt-2">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736B60]" />
              <input
                type="text"
                placeholder="Voqea qidirish..."
                value={chronologySearch}
                onChange={(e) => setChronologySearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#DDD7CD] rounded-xl text-xs text-[#1E1A16] placeholder-[#736B60] focus:outline-none focus:border-[#8C6B38]"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-[#DDD7CD] space-y-3 shadow-2xs">
          <div className="flex items-center space-x-2 text-xs uppercase font-bold text-[#736B60]">
            <Filter className="w-4 h-4 text-[#8C6B38]" />
            <span>Kategoriya bo‘yicha saralash:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Barchasi' },
              { id: 'konstitutsiya', label: 'Konstitutsiya' },
              { id: 'kodekslar', label: 'Kodekslar' },
              { id: 'qonunlar', label: 'Qonunlar' },
              { id: 'davlat', label: 'Davlat / Ramz' },
              { id: 'islohotlar', label: 'Islohotlar' }
            ].map((item) => (
              <button
                key={`chrono-filter-${item.id}`}
                onClick={() => setChronologyFilter(item.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                  chronologyFilter === item.id
                    ? 'bg-[#8C6B38] text-white shadow-2xs'
                    : 'bg-[#FAF8F5] border border-[#DDD7CD] text-[#595248] hover:text-[#1E1A16]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        {!isReady ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex gap-4 items-start pl-12 relative">
                <div className="absolute left-5 top-5 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-200 border-2 border-white" />
                <div className="p-6 rounded-2xl bg-white border border-[#DDD7CD] w-full space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-[#DDD7CD]">
            {filteredChronology.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#DDD7CD]">
                <p className="text-sm text-[#736B60]">Hech qanday tarixiy sana topilmadi.</p>
              </div>
            ) : (
              filteredChronology.map((event, eventIdx) => (
                <div
                  key={`chrono-${event.id}-${eventIdx}`}
                  className="relative pl-12 group"
                >
                  {/* Year marker dot */}
                  <div className="absolute left-5 top-5 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#8C6B38] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-white border border-[#DDD7CD] hover:border-[#8C6B38] transition-all space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center space-x-2.5">
                        <span className="px-3 py-1 rounded-md bg-[#FAF5ED] text-[#8C6B38] text-xs font-bold border border-[#E6DCC8]">
                          {event.year}
                        </span>
                        {event.dateExact && (
                          <span className="text-xs text-[#736B60] flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5 text-[#8C6B38]" />
                            <span>{event.dateExact}</span>
                          </span>
                        )}
                      </div>

                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        event.category === 'konstitutsiya'
                          ? 'bg-[#FAF5ED] text-[#8C6B38] border-[#E6DCC8]'
                          : event.category === 'kodekslar'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : event.category === 'qonunlar'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : event.category === 'davlat'
                          ? 'bg-purple-50 text-purple-700 border-purple-200'
                          : 'bg-[#FAF8F5] text-[#595248] border-[#DDD7CD]'
                      }`}>
                        {event.category === 'konstitutsiya' && 'Konstitutsiya'}
                        {event.category === 'kodekslar' && 'Kodeks'}
                        {event.category === 'qonunlar' && 'Qonun'}
                        {event.category === 'davlat' && 'Davlat / Ramz'}
                        {event.category === 'islohotlar' && 'Islohot'}
                        {event.category === 'xalqaro' && 'Xalqaro'}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-sm text-[#595248] leading-relaxed">
                      {event.description}
                    </p>

                    {event.examTip && (
                      <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#E6DCC8] text-xs text-[#2D241E] flex items-start space-x-2.5">
                        <Sparkles className="w-4 h-4 text-[#8C6B38] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#8C6B38] uppercase">DTM imtihonida eslab qoling: </strong>
                          <span>{event.examTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#EAE5DD] bg-[#FAF8F5] py-6 text-center text-xs text-[#736B60] mt-auto">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16">
          <span>MODDA • Huquqiy va tarixiy xronologiya bazasi</span>
        </div>
      </footer>
    </div>
  );
};
