const fs = require('fs');

const code = `
import React, { useState } from 'react';
import {
  BookOpen,
  HelpCircle,
  Bookmark,
  Scale,
  Columns3,
  Sparkles,
  Users,
  Building2,
  Shield,
  GraduationCap,
  Layers,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Search
} from 'lucide-react';
import { DARSLIK_8_FULL } from '../data/darslik8Complete';

interface Darslik8ReaderProps {
  fontStyleClass: string;
}

export const Darslik8Reader: React.FC<Darslik8ReaderProps> = ({ fontStyleClass }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [glossarySearch, setGlossarySearch] = useState('');
  const totalPages = 126;

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const filteredGlossary = DARSLIK_8_FULL.glossary.filter(g => 
    g.term.toLowerCase().includes(glossarySearch.toLowerCase()) || 
    g.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Page Controls Toolbar */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD7CD] flex flex-wrap items-center justify-between gap-4 sticky top-4 z-10 shadow-sm">
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="p-2 rounded-xl bg-white border border-[#DDD7CD] text-[#1C1814] disabled:opacity-30 hover:bg-[#F0EBE1] font-bold text-xs flex items-center space-x-1 shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Oldingi bet</span>
          </button>

          <div className="flex items-center space-x-1 text-xs font-bold">
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val >= 1 && val <= totalPages) {
                  setCurrentPage(val);
                }
              }}
              className="w-14 py-1.5 px-2 rounded-lg bg-white border border-[#DDD7CD] text-center text-xs font-black text-black focus:outline-none focus:border-[#8C6B38]"
            />
            <span className="text-[#736B60]">/ {totalPages}</span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
            className="p-2 rounded-xl bg-white border border-[#DDD7CD] text-[#1C1814] disabled:opacity-30 hover:bg-[#F0EBE1] font-bold text-xs flex items-center space-x-1 shadow-xs transition-colors"
          >
            <span className="hidden sm:inline">Keyingi bet</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick jump to key pages */}
        <div className="flex items-center space-x-1.5 text-xs overflow-x-auto pb-1 flex-1 px-4 max-w-2xl no-scrollbar">
          <span className="text-[11px] text-[#736B60] mr-1 shrink-0 hidden md:inline">Mundarija:</span>
          {[
            { page: 1, label: 'Muqova' },
            { page: 2, label: 'Mundarija' },
            { page: 5, label: 'I Bob' },
            { page: 7, label: '1-dars' },
            { page: 16, label: 'Davlat' },
            { page: 33, label: 'II Bob' },
            { page: 41, label: 'Huquq manbalari' },
            { page: 63, label: 'III Bob' },
            { page: 81, label: 'Jazolar' },
            { page: 89, label: 'IV Bob' },
            { page: 116, label: 'Mehnat huquqi' },
            { page: 121, label: 'Lug‘at' }
          ].map((p) => (
            <button
              key={\`jump-\${p.page}\`}
              onClick={() => setCurrentPage(p.page)}
              className={\`px-2 py-1 rounded-md text-[10px] font-bold shrink-0 transition-all \${
                currentPage >= p.page && (p.page === 121 || currentPage < (p.page + 10)) // rough active state
                  ? 'bg-[#8C6B38] text-white shadow-xs'
                  : 'bg-white border border-[#DDD7CD] text-[#554D43] hover:bg-[#F0EBE1]'
              }\`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-[#DDD7CD] shrink-0">
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 10, 60))}
            className="p-1 rounded-lg hover:bg-slate-100 text-[#554D43]"
            title="Kichiklashtirish"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-bold px-1.5 text-[#554D43] min-w-[36px] text-center">
            {zoomLevel}%
          </span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 10, 160))}
            className="p-1 rounded-lg hover:bg-slate-100 text-[#554D43]"
            title="Kattalashtirish"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Realistic Simulated Book Page Canvas */}
      <div className="flex justify-center p-2 sm:p-6 bg-slate-200/50 rounded-3xl overflow-x-auto min-h-[80vh] items-start">
        <div
          style={{ transform: \`scale(\${zoomLevel / 100})\`, transformOrigin: 'top center' }}
          className="w-full max-w-[760px] min-h-[960px] bg-white rounded-r-3xl rounded-l-md shadow-2xl border border-slate-300 p-8 sm:p-12 flex flex-col justify-between relative transition-transform duration-200"
        >
          {/* Book binding effect */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-300 to-transparent border-r border-slate-200/50 rounded-l-md"></div>

          {/* Header on page */}
          <div className="pl-6 flex items-center justify-between border-b pb-3 border-slate-200 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <span>
              {currentPage <= 4
                ? 'Kirish qismi'
                : currentPage <= 32
                ? 'SHAXS, JAMIYAT VA DAVLAT'
                : currentPage <= 62
                ? 'HUQUQ'
                : currentPage <= 88
                ? 'HUQUQBUZARLIK VA YURIDIK JAVOBGARLIK'
                : currentPage <= 120
                ? 'VOYAGA YETMAGANLARNING HUQUQ VA BURCHLARI'
                : 'AYRIM YURIDIK ATAMALARNING IZOHLI LUG‘ATI'}
            </span>
            <span className="text-blue-800">Davlat va huquq asoslari • 8-sinf</span>
          </div>

          {/* Page Content Body */}
          <div className="pl-6 my-auto py-8 space-y-6">
            {/* Page 1: Cover */}
            {currentPage === 1 && (
              <div className="text-center space-y-8 animate-in fade-in duration-500">
                <div className="w-64 sm:w-80 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-slate-100 transform transition-transform hover:scale-105">
                  <img
                    src={DARSLIK_8_FULL.coverImage}
                    alt="Darslik muqovasi"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-serif font-black text-slate-900 uppercase">
                    {DARSLIK_8_FULL.title}
                  </h2>
                  <p className="text-sm font-bold text-slate-600">
                    {DARSLIK_8_FULL.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 pt-4">
                    {DARSLIK_8_FULL.publisher}
                  </p>
                </div>
              </div>
            )}

            {/* Page 2: Table of Contents */}
            {currentPage === 2 && (
              <div className="space-y-6 text-sm animate-in fade-in duration-500">
                <h2 className="text-2xl font-serif font-black text-center text-slate-900 border-b-2 border-slate-900 pb-3">
                  MUNDARIJA
                </h2>
                <div className="space-y-4 font-serif">
                  <div className="flex justify-between font-bold text-blue-900">
                    <span>Qadrli o‘quvchi! / Kirish</span>
                    <span>3-bet</span>
                  </div>

                  <div className="space-y-2">
                    <div className="font-black text-blue-900 uppercase bg-blue-50 py-1 px-2 rounded">
                      I BOB. SHAXS, JAMIYAT VA DAVLAT
                    </div>
                    <div className="pl-4 space-y-1.5 text-slate-800">
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>1–2-dars. Shaxsning jamiyatdagi o‘rni</span><span>7</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>3-dars. Jamiyat va uning tuzilishi</span><span>11</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>4–5-dars. Davlat tushunchasi va belgilari</span><span>16</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>6-dars. Davlat funksiyalari</span><span>21</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>7-8-dars. Shaxs, jamiyat va davlat munosabatlari</span><span>24</span></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-black text-blue-900 uppercase bg-blue-50 py-1 px-2 rounded">
                      II BOB. HUQUQ
                    </div>
                    <div className="pl-4 space-y-1.5 text-slate-800">
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>11–12-dars. Huquq tushunchasi va belgilari</span><span>35</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>13-dars. Huquqiy normalar va manbalar</span><span>41</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>14-dars. Huquq tarmoqlari</span><span>45</span></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-black text-blue-900 uppercase bg-blue-50 py-1 px-2 rounded">
                      III BOB. HUQUQBUZARLIK VA YURIDIK JAVOBGARLIK
                    </div>
                    <div className="pl-4 space-y-1.5 text-slate-800">
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>17–18-dars. Huquqiy xulq-atvor</span><span>65</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>19–20-dars. Huquqbuzarlik</span><span>69</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>21–22-dars. Yuridik javobgarlik</span><span>76</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>23–24-dars. Yuridik javobgarlikning oqibatlari</span><span>81</span></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-black text-blue-900 uppercase bg-blue-50 py-1 px-2 rounded">
                      IV BOB. VOYAGA YETMAGANLARNING HUQUQ VA BURCHLARI
                    </div>
                    <div className="pl-4 space-y-1.5 text-slate-800">
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>27-dars. Fuqarolik huquqlari</span><span>91</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>28-dars. Jinoyat qonunchiligi va yoshlar</span><span>95</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>31–32-dars. Oila qonunchiligida majburiyatlar</span><span>111</span></div>
                      <div className="flex justify-between border-b border-slate-100 border-dotted"><span>33-dars. Mehnat huquqlari</span><span>116</span></div>
                    </div>
                  </div>

                  <div className="flex justify-between font-bold border-t-2 border-slate-900 pt-3 text-blue-900">
                    <span>Ayrim yuridik atamalarning izohli lug‘ati</span>
                    <span>121-bet</span>
                  </div>
                </div>
              </div>
            )}

            {/* Chapter Banner Pages: 5, 33, 63, 89 */}
            {[5, 33, 63, 89].includes(currentPage) && (
              <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-lg relative">
                  <img
                    src={
                      currentPage === 5 ? '/src/assets/images/ch1_shaxs_jamiyat_1789449472159.jpg' :
                      currentPage === 33 ? '/src/assets/images/ch2_huquq_justice_1789449495921.jpg' :
                      currentPage === 63 ? '/src/assets/images/ch3_javobgarlik_1789449515238.jpg' :
                      '/src/assets/images/ch4_yoshlar_huquqi_1789449539818.jpg'
                    }
                    alt={\`BOB \${currentPage}\`}
                    referrerPolicy="no-referrer"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-white text-shadow-md">
                    <span className="text-lg font-black tracking-[0.3em] text-amber-400 mb-4">
                      {currentPage === 5 ? 'I BOB' : currentPage === 33 ? 'II BOB' : currentPage === 63 ? 'III BOB' : 'IV BOB'}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-black text-center leading-tight">
                      {currentPage === 5 ? 'SHAXS, JAMIYAT VA DAVLAT' : currentPage === 33 ? 'HUQUQ' : currentPage === 63 ? 'HUQUQBUZARLIK VA YURIDIK JAVOBGARLIK' : 'VOYAGA YETMAGANLARNING HUQUQ VA BURCHLARI'}
                    </h2>
                  </div>
                </div>
              </div>
            )}

            {/* For other pages: render dynamic authentic content based on page range */}
            {currentPage > 2 && ![5, 33, 63, 89].includes(currentPage) && (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                {/* Chapter Title Badge */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200">
                  <span className="text-sm font-black uppercase text-blue-900 tracking-wider">
                    {currentPage <= 32
                      ? 'I BOB: Shaxs, Jamiyat va Davlat'
                      : currentPage <= 62
                      ? 'II BOB: Huquq'
                      : currentPage <= 88
                      ? 'III BOB: Huquqbuzarlik va Yuridik Javobgarlik'
                      : currentPage <= 120
                      ? 'IV BOB: Voyaga Yetmaganlarning Huquqlari'
                      : 'Izohli Lug‘at'}
                  </span>
                </div>

                {/* Render matching lesson content for this page */}
                {(() => {
                  // Glossary pages
                  if (currentPage >= 121) {
                    const termsPerPage = 16;
                    const startIndex = (currentPage - 121) * termsPerPage;
                    const pageGlossary = DARSLIK_8_FULL.glossary.slice(startIndex, startIndex + termsPerPage);
                    
                    if (pageGlossary.length === 0) {
                       return <div className="text-center text-slate-500 py-20 font-serif italic">Lug‘at yakunlandi. Darslik o‘z nihoyasiga yetdi.</div>
                    }

                    return (
                      <div className="space-y-6">
                        {currentPage === 121 && (
                           <div className="space-y-4 mb-6">
                             <h3 className="text-2xl font-serif font-black text-slate-900 text-center">
                               AYRIM YURIDIK ATAMALARNING IZOHLI LUG‘ATI
                             </h3>
                             
                             {/* Glossary Search built into the page */}
                             <div className="relative max-w-sm mx-auto">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                  type="text"
                                  value={glossarySearch}
                                  onChange={(e) => setGlossarySearch(e.target.value)}
                                  placeholder="Atama qidirish..."
                                  className="w-full pl-9 pr-3 py-2 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                />
                             </div>
                           </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm font-serif">
                          {(glossarySearch ? filteredGlossary : pageGlossary).map((g, idx) => (
                            <div key={\`page-g-\${idx}\`} className="border-b border-slate-100 pb-2">
                              <span className="font-black text-slate-900 block mb-1">{g.term}</span>
                              {g.origin && (
                                <span className="text-slate-500 italic text-xs mb-1 block">({g.origin})</span>
                              )}
                              <span className="text-slate-700 leading-snug">{g.definition}</span>
                            </div>
                          ))}
                          
                          {glossarySearch && filteredGlossary.length === 0 && (
                            <div className="col-span-2 text-center py-8 text-slate-500 italic">
                               "{glossarySearch}" so‘zi bo‘yicha atama topilmadi.
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }

                  // Find lesson matching page or default lesson
                  let matchedLesson = DARSLIK_8_FULL.chapters[0].lessons[0];
                  for (const ch of DARSLIK_8_FULL.chapters) {
                    for (const l of ch.lessons) {
                      const parts = l.pages.match(/\d+/g);
                      if (parts && parts.length >= 1) {
                        const startP = parseInt(parts[0], 10);
                        const endP = parts.length > 1 ? parseInt(parts[1], 10) : startP;
                        if (currentPage >= startP && currentPage <= endP) {
                          matchedLesson = l;
                          break;
                        }
                      }
                    }
                  }

                  return (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="px-3 py-1 rounded bg-blue-800 text-white font-black text-sm shadow-sm">
                          {matchedLesson.lessonNumber}
                        </span>
                        <h3 className="text-2xl font-serif font-black text-slate-900 leading-tight">
                          {matchedLesson.title}
                        </h3>
                      </div>

                      {matchedLesson.epigraph && (
                        <div className="float-right max-w-[280px] ml-6 mb-4 p-4 bg-amber-50/50 border-l-4 border-amber-600 shadow-sm rounded-r-xl">
                          <p className="text-sm italic text-slate-800 font-serif leading-relaxed">
                            “{matchedLesson.epigraph.text}”
                          </p>
                          <span className="block text-right font-bold text-amber-900 not-italic mt-2 text-xs">
                            — {matchedLesson.epigraph.author}
                          </span>
                        </div>
                      )}

                      <div className={\`space-y-4 text-base text-slate-800 leading-relaxed text-justify indent-8 \${fontStyleClass}\`}>
                        {matchedLesson.coreText.map((p, idx) => (
                          <p key={\`p-sim-\${idx}\`}>{p}</p>
                        ))}
                      </div>
                      
                      <div className="clear-both"></div>

                      {matchedLesson.memorizeCallouts && (
                        <div className="my-6 p-5 rounded-2xl bg-amber-50 border border-amber-200/60 shadow-inner space-y-3 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-200/30 rounded-bl-full -mr-4 -mt-4"></div>
                          <span className="text-xs font-black text-amber-800 uppercase tracking-widest flex items-center gap-2">
                            <Bookmark className="w-4 h-4" /> Yodda tuting
                          </span>
                          <div className="space-y-2">
                            {matchedLesson.memorizeCallouts.map((m, idx) => (
                              <p key={\`m-sim-\${idx}\`} className="text-sm text-slate-800 bg-white/50 p-2 rounded-lg">
                                <strong className="text-amber-900 mr-2">{m.term}:</strong> {m.definition}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {matchedLesson.lawQuotes && (
                        <div className="my-6 p-5 rounded-2xl bg-blue-50/80 border border-blue-200/60 space-y-3 relative overflow-hidden shadow-sm">
                          <Scale className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-100 opacity-50" />
                          <span className="text-xs font-black text-blue-800 uppercase tracking-widest flex items-center gap-2 relative z-10">
                            Qonun belgilaydi
                          </span>
                          <div className="relative z-10 space-y-3">
                            {matchedLesson.lawQuotes.map((lq, idx) => (
                              <div key={\`lq-sim-\${idx}\`} className="bg-white p-3 rounded-lg border border-blue-100 shadow-xs">
                                <span className="font-bold text-blue-900 block mb-1 text-sm">{lq.lawName} {lq.articleNumber}</span>
                                <p className="text-sm text-slate-800 italic font-serif leading-relaxed">
                                  “{lq.text}”
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {matchedLesson.diagrams && (
                        <div className="my-8 space-y-6">
                           {matchedLesson.diagrams.map((diag, idx) => (
                             <div key={\`diag-sim-\${idx}\`} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center shadow-sm">
                               <h4 className="text-sm font-black text-slate-800 uppercase mb-4 tracking-wider">{diag.title}</h4>
                               <div className="flex flex-wrap justify-center gap-3">
                                 {diag.items.map((item, iIdx) => (
                                   <div key={\`d-item-\${iIdx}\`} className="bg-white border-2 border-slate-200 p-3 rounded-xl min-w-[120px] max-w-[200px] shadow-xs hover:border-blue-400 transition-colors">
                                     <span className="font-bold text-blue-900 block text-sm">{item.label}</span>
                                     {item.desc && <span className="text-xs text-slate-500 mt-1 block">{item.desc}</span>}
                                   </div>
                                 ))}
                               </div>
                             </div>
                           ))}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Page Footer */}
          <div className="pl-6 border-t-2 pt-4 mt-8 border-slate-200 flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
            <span>Respublika Ta’lim Markazi • 2024</span>
            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-300 text-slate-800 font-black text-sm shadow-sm">
              {currentPage}
            </span>
            <span>Davlat va huquq asoslari</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`

fs.writeFileSync('src/components/Darslik8Reader.tsx', code);
console.log('Restored Darslik8Reader.tsx with single Book View');
