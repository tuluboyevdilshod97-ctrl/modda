import React from 'react';
import {
  Scale,
  Landmark,
  Briefcase,
  UserCheck,
  ShieldAlert,
  HeartHandshake,
  Gavel,
  ShieldCheck,
  BookOpen,
  Play,
  GraduationCap,
  Award
} from 'lucide-react';
import { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  questionCount?: number;
  osonCount?: number;
  qiyinCount?: number;
  onOpenDifficultyModal: (topic: Topic, mode: 'quiz' | 'practice') => void;
  completionPercentage?: number;
}

const ICONS_MAP: Record<string, React.FC<{ className?: string }>> = {
  Scale,
  Landmark,
  Briefcase,
  UserCheck,
  ShieldAlert,
  HeartHandshake,
  Gavel,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Award
};

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  questionCount,
  osonCount,
  qiyinCount,
  onOpenDifficultyModal,
  completionPercentage = 0,
}) => {
  const [isShimmering, setIsShimmering] = React.useState(false);
  const Icon = ICONS_MAP[topic.iconName] || Scale;
  const pct = Math.min(100, Math.max(0, completionPercentage));
  const circumference = 2 * Math.PI * 16;
  const strokeDashoffset = circumference - (circumference * pct) / 100;

  const handleAction = (mode: 'quiz' | 'practice') => {
    setIsShimmering(true);
    setTimeout(() => {
      setIsShimmering(false);
    }, 1200);
    onOpenDifficultyModal(topic, mode);
  };

  return (
    <div
      id={`topic-card-${topic.id}`}
      className="group relative bg-[#FAF8F5] border border-[#E3DED6] hover:border-[#8C6B38] rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md overflow-hidden min-h-[260px] sm:min-h-[290px]"
      style={
        topic.id === 'mamuriy'
          ? {
              marginLeft: '0px',
              marginTop: '0px',
              marginRight: '0px',
              marginBottom: '0px',
              paddingTop: '31.5px',
              paddingLeft: '34.5px',
              paddingRight: '31.5px',
              width: '423px',
              height: '291.828px',
              maxWidth: '100%',
            }
          : topic.id === 'davlat_huquq'
          ? {
              paddingLeft: '27.5px',
              paddingTop: '6.5px',
              paddingBottom: '30.5px',
              marginLeft: '0px',
              marginTop: '0px',
            }
          : undefined
      }
    >
      {/* Subtle modern shimmer gloss sweep overlay */}
      {isShimmering && (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-2xl">
          <div 
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#8C6B38]/15 dark:via-white/20 to-transparent animate-shimmer-sweep" 
          />
        </div>
      )}
      <div
        style={topic.id === 'davlat_huquq' ? {
          fontSize: '11.5px',
          lineHeight: '23.75px',
          paddingTop: '-8px',
          marginLeft: '-2px',
          marginTop: '20px'
        } : undefined}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-[#1E1A16] group-hover:text-[#8C6B38] transition-colors mb-1.5 flex items-center gap-2">
              <Icon className="w-4 h-4 text-[#8C6B38] shrink-0" />
              <span>{topic.title}</span>
            </h3>

            {/* Subtitle */}
            {topic.id !== 'bmba' && topic.id !== 'milliy_sertifikat' && (
              <p className="text-xs text-[#736B60] font-medium mb-2">
                {topic.subtitle}
              </p>
            )}

            {/* Badges / Metrics */}
            {topic.id === 'bmba' ? null : topic.id === 'milliy_sertifikat' ? (
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                  Sertifikat • Aralash testlar • {questionCount} ta savol
                </span>
              </div>
            ) : (
              (osonCount !== undefined && qiyinCount !== undefined && (osonCount > 0 || qiyinCount > 0)) && (
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] sm:text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {osonCount} ta oson
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                    {qiyinCount} ta qiyin
                  </span>
                </div>
              )
            )}
          </div>

          {/* Circular Progress Indicator */}
          <div className="relative w-11 h-11 flex items-center justify-center shrink-0" title={`Mavzuni o‘zlashtirish darajasi: ${pct}%`}>
            <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="16"
                className="stroke-stone-200/70 fill-transparent"
                strokeWidth="2.5"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                className={`fill-transparent transition-all duration-500 ${
                  pct >= 75
                    ? 'stroke-emerald-500'
                    : pct >= 40
                    ? 'stroke-amber-500'
                    : pct > 0
                    ? 'stroke-rose-400'
                    : 'stroke-transparent'
                }`}
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={pct > 0 ? strokeDashoffset : circumference}
                strokeLinecap="round"
                style={{
                  fontSize: '20.5px',
                  lineHeight: '28.75px',
                  paddingLeft: '0px',
                }}
              />
            </svg>
            <span className="text-[9px] font-extrabold font-mono text-[#595248]">
              {pct}%
            </span>
          </div>
        </div>

        {/* Description */}
        {topic.id === 'bmba' ? (
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6B38] bg-[#FAF5ED] px-2.5 py-1 rounded-lg border border-[#E6DCC8]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Jami {questionCount || 150} ta test savoli bor</span>
            </span>
          </div>
        ) : (
          <p className="text-xs text-[#595248] leading-relaxed line-clamp-2 mb-4">
            {topic.description}
          </p>
        )}
      </div>

      {/* Action Buttons: O'rganish va Sinov */}
      <div className="pt-3 border-t border-[#EAE5DD] mt-auto">
        <div className="grid grid-cols-2 gap-2">
          {/* O'rganish tugmasi */}
          <button
            type="button"
            id={`btn-practice-${topic.id}`}
            onClick={() => handleAction('practice')}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-[#FAF5ED] text-[#3D352B] border border-[#DDD7CD] hover:border-[#8C6B38] text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-98"
            title="O‘rganish rejimida testni boshlash (Qiyinlik darajasini tanlash bilan)"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#8C6B38]" />
            <span>O‘rganish</span>
          </button>

          {/* Sinov tugmasi */}
          <button
            type="button"
            id={`btn-quiz-${topic.id}`}
            onClick={() => handleAction('quiz')}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#8C6B38] to-[#A37E45] hover:from-[#9E7A42] hover:to-[#B58E50] text-white text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
            title="Sinov rejimida testni boshlash (Qiyinlik darajasini tanlash bilan)"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Sinov</span>
          </button>
        </div>
      </div>
    </div>
  );
};
