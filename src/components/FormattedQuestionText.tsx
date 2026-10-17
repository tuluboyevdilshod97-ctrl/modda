import React from 'react';
import { parseEulerVennQuestion, EulerVennDiagram } from './EulerVennDiagram';
import { cleanQuestionText } from '../utils/questionFormatter';
import { Scale, FileSpreadsheet } from 'lucide-react';

interface FormattedQuestionTextProps {
  question: string;
  className?: string;
}

export const FormattedQuestionText: React.FC<FormattedQuestionTextProps> = ({
  question,
  className = ''
}) => {
  const cleaned = cleanQuestionText(question);
  const vennData = parseEulerVennQuestion(cleaned);

  if (vennData) {
    return <EulerVennDiagram vennData={vennData} />;
  }

  // Check if it's a Kazus or Ochiq Test
  const isKazus = cleaned.startsWith('[KAZUS');
  const isOchiqTest = cleaned.startsWith('[OCHIQ TEST');

  let tagLabel = '';
  let restText = cleaned;

  if (isKazus || isOchiqTest) {
    const match = cleaned.match(/^\[(.*?)\]:?\s*/);
    if (match) {
      tagLabel = match[1];
      restText = cleaned.slice(match[0].length);
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {tagLabel && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FAF5ED] text-[#8C6B38] border border-[#E6DCC8] shadow-2xs">
          {isKazus ? <Scale className="w-3.5 h-3.5" /> : <FileSpreadsheet className="w-3.5 h-3.5" />}
          <span>{tagLabel}</span>
        </div>
      )}
      <div className="text-base sm:text-xl font-medium text-[#1E1A16] leading-relaxed whitespace-pre-line">
        {restText}
      </div>
    </div>
  );
};
