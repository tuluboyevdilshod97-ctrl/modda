import React from 'react';

export interface VennData {
  title: string;
  set1Label: string;
  set2Label: string;
  intersectionLabel: string;
  items: Array<{ letter: string; text: string }>;
}

export function parseEulerVennQuestion(rawText: string): VennData | null {
  if (!rawText) return null;
  const isVenn = /eyler[- ]?venn/i.test(rawText) || /venn\s+diagrammasi/i.test(rawText);
  if (!isVenn) return null;

  try {
    // Look for I. , II. , III.
    const iIndex = rawText.search(/(?:^|\s)I\.\s+/);
    const iiIndex = rawText.search(/(?:^|\s)II\.\s+/);
    const iiiIndex = rawText.search(/(?:^|\s)III\.\s+/);

    if (iIndex === -1 || iiIndex === -1 || iiiIndex === -1) {
      return null;
    }

    const title = rawText.slice(0, iIndex).trim();
    const set1Label = rawText.slice(iIndex, iiIndex).replace(/(?:^|\s)I\.\s+/, '').trim();
    
    // Find where items start (e.g. a) or 1) )
    const itemsStartMatch = rawText.slice(iiiIndex).search(/(?:^|\s)[a-e]\)\s+/i);
    let set2Label = '';
    let intersectionLabel = 'Umumiy xususiyatlar';
    let itemsText = '';

    if (itemsStartMatch !== -1) {
      const actualItemsStart = iiiIndex + itemsStartMatch;
      set2Label = rawText.slice(iiIndex, iiiIndex).replace(/(?:^|\s)II\.\s+/, '').trim();
      intersectionLabel = rawText.slice(iiiIndex, actualItemsStart).replace(/(?:^|\s)III\.\s+/, '').trim() || 'Umumiy xususiyatlar';
      itemsText = rawText.slice(actualItemsStart).trim();
    } else {
      set2Label = rawText.slice(iiIndex, iiiIndex).replace(/(?:^|\s)II\.\s+/, '').trim();
      intersectionLabel = rawText.slice(iiiIndex).replace(/(?:^|\s)III\.\s+/, '').trim() || 'Umumiy xususiyatlar';
    }

    const items: Array<{ letter: string; text: string }> = [];
    if (itemsText) {
      const parts = itemsText.split(/(?=(?:^|\s)[a-z]\)\s*)/gi);
      for (const part of parts) {
        const trimmed = part.trim();
        const match = trimmed.match(/^([a-z])\)\s*(.*)/i);
        if (match) {
          const letter = match[1].toLowerCase();
          const text = match[2].replace(/;\s*$/, '').trim();
          items.push({ letter, text });
        }
      }
    }

    return {
      title,
      set1Label: set1Label || 'I To‘plam',
      set2Label: set2Label || 'II To‘plam',
      intersectionLabel: intersectionLabel || 'III Umumiy xususiyatlar',
      items
    };
  } catch (e) {
    console.error("Error parsing Euler-Venn question:", e);
    return null;
  }
}

interface EulerVennDiagramProps {
  vennData: VennData;
}

export const EulerVennDiagram: React.FC<EulerVennDiagramProps> = ({ vennData }) => {
  const { title, set1Label, set2Label, intersectionLabel, items } = vennData;

  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-b from-[#FAF8F5] to-white border border-[#E3DED6] rounded-2xl shadow-xs">
      {/* Question Prompt Title */}
      {title && (
        <p className="text-base sm:text-lg font-semibold text-[#1E1A16] mb-5 leading-snug">
          {title}
        </p>
      )}

      {/* 3 Categories Badges Header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 shadow-2xs">
          <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 shadow-xs">
            I
          </span>
          <span className="text-xs sm:text-sm font-semibold text-amber-950 leading-tight">
            {set1Label}
          </span>
        </div>

        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 shadow-2xs">
          <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 shadow-xs">
            III
          </span>
          <span className="text-xs sm:text-sm font-semibold text-emerald-950 leading-tight">
            {intersectionLabel}
          </span>
        </div>

        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 shadow-2xs">
          <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 shadow-xs">
            II
          </span>
          <span className="text-xs sm:text-sm font-semibold text-blue-950 leading-tight">
            {set2Label}
          </span>
        </div>
      </div>

      {/* SVG Euler-Venn Visual Diagram */}
      <div className="w-full flex justify-center py-2 px-2 bg-white rounded-xl border border-[#EDE8E0]">
        <svg
          viewBox="0 0 540 250"
          className="w-full max-w-[500px] h-auto drop-shadow-xs select-none"
          aria-label="Eyler-Venn Diagrammasi"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="vennGradI" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="vennGradII" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.16" />
            </linearGradient>
            <filter id="vennShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Left Circle (Set I) */}
          <circle
            cx="210"
            cy="125"
            r="105"
            fill="url(#vennGradI)"
            stroke="#D97706"
            strokeWidth="2.5"
            filter="url(#vennShadow)"
          />

          {/* Right Circle (Set II) */}
          <circle
            cx="330"
            cy="125"
            r="105"
            fill="url(#vennGradII)"
            stroke="#0284C7"
            strokeWidth="2.5"
            filter="url(#vennShadow)"
          />

          {/* Center Intersection Highlight Background */}
          {/* We draw a subtle intersection shape for emphasis */}
          <path
            d="M 270 38 A 105 105 0 0 1 270 212 A 105 105 0 0 1 270 38 Z"
            fill="#10B981"
            fillOpacity="0.12"
            stroke="#059669"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* Roman Numeral I Badge & Label */}
          <g transform="translate(160, 95)">
            <circle cx="0" cy="0" r="18" fill="#D97706" />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              I
            </text>
            <text
              x="0"
              y="32"
              textAnchor="middle"
              fill="#78350F"
              fontSize="12"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              1-to‘plam
            </text>
          </g>

          {/* Roman Numeral II Badge & Label */}
          <g transform="translate(380, 95)">
            <circle cx="0" cy="0" r="18" fill="#0284C7" />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              II
            </text>
            <text
              x="0"
              y="32"
              textAnchor="middle"
              fill="#075985"
              fontSize="12"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              2-to‘plam
            </text>
          </g>

          {/* Roman Numeral III Badge & Label (Intersection) */}
          <g transform="translate(270, 115)">
            <circle cx="0" cy="0" r="17" fill="#059669" />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="13"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              III
            </text>
            <text
              x="0"
              y="30"
              textAnchor="middle"
              fill="#065F46"
              fontSize="11"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Kesishma
            </text>
            <text
              x="0"
              y="44"
              textAnchor="middle"
              fill="#047857"
              fontSize="9.5"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              (Umumiy)
            </text>
          </g>
        </svg>
      </div>

      {/* Structured Sub-Statements List (a, b, c, d, e...) */}
      {items.length > 0 && (
        <div className="mt-5 space-y-2.5">
          <div className="flex items-center justify-between pb-1 border-b border-[#EAE5DD]">
            <span className="text-xs font-bold text-[#736B60] uppercase tracking-wider">
              Tahlil qilinuvchi belgilar:
            </span>
            <span className="text-[11px] text-[#A39A8E]">
              Diagrammaga mosligini aniqlang
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {items.map((it) => (
              <div
                key={`venn-item-${it.letter}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#DDD7CD] hover:border-[#8C6B38] transition-colors"
              >
                <span className="w-6 h-6 rounded-md bg-[#FAF5ED] border border-[#E6DCC8] text-[#8C6B38] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {it.letter})
                </span>
                <span className="text-xs sm:text-sm text-[#1E1A16] leading-relaxed font-medium">
                  {it.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
