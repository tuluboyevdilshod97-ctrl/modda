import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { TrendingUp, Award } from 'lucide-react';
import { QuizResultHistory } from '../types';
import { formatShortTopicTitle } from './TahlilMarkaziPanel';

interface KnowledgeGrowthChartProps {
  history: QuizResultHistory[];
}

// Custom Tooltip component for beautiful warm neutral style
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2.5 rounded-lg border border-[#E5E0D8] shadow-md text-[11px] font-sans text-[#1E1A16] min-w-[195px] z-50">
        <p className="font-bold text-[#8C6B38] mb-1">{data.name}</p>
        <p className="text-[#736B60] font-medium mb-1.5 truncate" title={data.fullTopic}>
          Mavzu: <span className="text-[#1E1A16] font-semibold">{data.topic}</span>
        </p>
        <div className="space-y-1 border-t border-[#F3EDE2] pt-1.5">
          <div className="flex justify-between gap-4">
            <span className="flex items-center gap-1.5 text-[#1E1A16] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#8C6B38]" />
              Natija:
            </span>
            <span className="font-bold text-emerald-700">{data.percentage}% ({data.ball} b.)</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="flex items-center gap-1.5 text-[#736B60] font-medium">
              <span className="w-2 h-0.5 border-t border-dashed border-[#C19A6B]" />
              Oldingi:
            </span>
            <span className="font-bold text-[#C19A6B]">{data.prevPercentage}% ({data.prevBall} b.)</span>
          </div>
        </div>
        <p className="text-[9px] text-[#A39A8E] mt-2">{data.date}</p>
      </div>
    );
  }
  return null;
};

// Parse uz-UZ date string format (dd.mm.yyyy) to JS Date object safely
const parseUzDate = (dateStr: string): Date => {
  try {
    const parts = dateStr.split('.');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // 0-indexed month
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
  } catch (e) {
    // fallback
  }
  return new Date(dateStr);
};

export const KnowledgeGrowthChart: React.FC<KnowledgeGrowthChartProps> = ({ history }) => {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('weekly');
  const hasHistory = history && history.length > 0;

  // Current Month/Year calculations
  const now = useMemo(() => new Date(), []);
  const year = now.getFullYear();
  const month = now.getMonth();
  const lastDayOfMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);
  const monthNamesEng = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);
  const curMonthName = monthNamesEng[month];

  // Process data based on active range (weekly vs monthly)
  const chartData = useMemo(() => {
    // ==========================================
    // 1. ONBOARDING SAMPLE DATA (if history empty)
    // ==========================================
    if (!hasHistory) {
      if (timeRange === 'weekly') {
        return [
          { name: 'Mon', percentage: 40, prevPercentage: 30, ball: 37, prevBall: 28, topic: 'Mavzu tahlili', date: 'Dushanba', fullTopic: 'Kirish testi' },
          { name: 'Tue', percentage: 45, prevPercentage: 40, ball: 42, prevBall: 37, topic: 'Konstitutsiya', date: 'Seshanba', fullTopic: 'Konstitutsiya' },
          { name: 'Wed', percentage: 60, prevPercentage: 45, ball: 56, prevBall: 42, topic: 'Fuqarolik', date: 'Chorshanba', fullTopic: 'Fuqarolik' },
          { name: 'Thu', percentage: 55, prevPercentage: 60, ball: 51, prevBall: 56, topic: 'Jinoyat', date: 'Payshanba', fullTopic: 'Jinoyat' },
          { name: 'Fri', percentage: 70, prevPercentage: 55, ball: 65, prevBall: 51, topic: 'Mehnat', date: 'Juma', fullTopic: 'Mehnat' },
          { name: 'Sat', percentage: 85, prevPercentage: 70, ball: 79, prevBall: 65, topic: 'Oila', date: 'Shanba', fullTopic: 'Oila' },
          { name: 'Sun', percentage: 90, prevPercentage: 85, ball: 84, prevBall: 79, topic: 'To‘liq to‘plam', date: 'Yakshanba', fullTopic: 'Imtihon' },
        ];
      } else {
        return [
          { name: `1-${curMonthName}`, percentage: 40, prevPercentage: 30, ball: 37, prevBall: 28, topic: 'Boshlang‘ich bilim', date: `1-${curMonthName}`, fullTopic: 'Kirish testi' },
          { name: `10-${curMonthName}`, percentage: 55, prevPercentage: 40, ball: 51, prevBall: 37, topic: 'Konstitutsiya', date: `10-${curMonthName}`, fullTopic: 'Konstitutsiya' },
          { name: `20-${curMonthName}`, percentage: 72, prevPercentage: 55, ball: 67, prevBall: 51, topic: 'Oila va Jinoyat', date: `20-${curMonthName}`, fullTopic: 'Oila va Jinoyat' },
          { name: `${lastDayOfMonth}-${curMonthName}`, percentage: 88, prevPercentage: 72, ball: 82, prevBall: 67, topic: 'Muvaffaqiyat', date: `${lastDayOfMonth}-${curMonthName}`, fullTopic: 'Yakuniy sinov' },
        ];
      }
    }

    // ==========================================
    // 2. REAL USER DATA CALCULATION
    // ==========================================
    // Sort oldest-to-newest chronologically
    const sortedHistory = [...history].sort((a, b) => parseUzDate(a.date).getTime() - parseUzDate(b.date).getTime());

    if (timeRange === 'weekly') {
      // Find current week Monday
      const currentDay = now.getDay();
      const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
      const monday = new Date(now);
      monday.setDate(now.getDate() + distanceToMonday);
      monday.setHours(0, 0, 0, 0);

      const weekdaysEng = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const weekdaysUzb = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];

      return weekdaysEng.map((dayEng, index) => {
        // Calculate date of this specific day of the week
        const targetDate = new Date(monday);
        targetDate.setDate(monday.getDate() + index);
        const targetDateStr = targetDate.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' });

        // Find matches for this target date
        const dayMatches = sortedHistory.filter(h => h.date === targetDateStr);

        let activeResult = null;
        let prevResult = null;

        if (dayMatches.length > 0) {
          activeResult = dayMatches[dayMatches.length - 1];
          // Previous result is either a previous attempt on the same day or the latest record before this day
          const sameDayIndexInSorted = sortedHistory.indexOf(activeResult);
          prevResult = sameDayIndexInSorted > 0 ? sortedHistory[sameDayIndexInSorted - 1] : null;
        } else {
          // If no test was taken on this day, we carry forward the status of the most recent test taken on or before this day
          const recordsBeforeOrOn = sortedHistory.filter(h => parseUzDate(h.date).getTime() <= targetDate.getTime());
          if (recordsBeforeOrOn.length > 0) {
            activeResult = recordsBeforeOrOn[recordsBeforeOrOn.length - 1];
            const activeIndex = sortedHistory.indexOf(activeResult);
            prevResult = activeIndex > 0 ? sortedHistory[activeIndex - 1] : null;
          }
        }

        // Fallback baseline if no tests exist prior
        const percentage = activeResult ? activeResult.scorePercentage : 0;
        const prevPercentage = prevResult ? prevResult.scorePercentage : 0;
        const ball = activeResult ? (activeResult.scoreBall > 0 ? Number(activeResult.scoreBall.toFixed(1)) : Math.round((activeResult.correctAnswers / activeResult.totalQuestions) * 93)) : 0;
        const prevBall = prevResult ? (prevResult.scoreBall > 0 ? Number(prevResult.scoreBall.toFixed(1)) : Math.round((prevResult.correctAnswers / prevResult.totalQuestions) * 93)) : 0;
        const topic = activeResult ? formatShortTopicTitle(activeResult.topicTitle) : 'Sinov kutilmoqda';
        const fullTopic = activeResult ? activeResult.topicTitle : 'Test topshirilmagan';

        return {
          name: dayEng,
          percentage,
          prevPercentage,
          ball,
          prevBall,
          topic,
          fullTopic,
          date: weekdaysUzb[index] + `, ${targetDate.getDate()}.${targetDate.getMonth() + 1}`,
        };
      });

    } else {
      // MONTHLY: 4 checkpoints across the current month
      const checkpoints = [1, 10, 20, lastDayOfMonth];

      return checkpoints.map((dayNum) => {
        const targetDate = new Date(year, month, dayNum, 23, 59, 59);
        const checkpointName = `${dayNum}-${curMonthName}`;

        // Find tests taken on or before this day in the current month
        const recordsBeforeOrOn = sortedHistory.filter(h => {
          const d = parseUzDate(h.date);
          return d.getTime() <= targetDate.getTime();
        });

        let activeResult = null;
        let prevResult = null;

        if (recordsBeforeOrOn.length > 0) {
          activeResult = recordsBeforeOrOn[recordsBeforeOrOn.length - 1];
          const activeIndex = sortedHistory.indexOf(activeResult);
          prevResult = activeIndex > 0 ? sortedHistory[activeIndex - 1] : null;
        }

        const percentage = activeResult ? activeResult.scorePercentage : 0;
        const prevPercentage = prevResult ? prevResult.scorePercentage : 0;
        const ball = activeResult ? (activeResult.scoreBall > 0 ? Number(activeResult.scoreBall.toFixed(1)) : Math.round((activeResult.correctAnswers / activeResult.totalQuestions) * 93)) : 0;
        const prevBall = prevResult ? (prevResult.scoreBall > 0 ? Number(prevResult.scoreBall.toFixed(1)) : Math.round((prevResult.correctAnswers / prevResult.totalQuestions) * 93)) : 0;
        const topic = activeResult ? formatShortTopicTitle(activeResult.topicTitle) : 'Mavzu tahlili';
        const fullTopic = activeResult ? activeResult.topicTitle : 'Test topshirilmagan';

        return {
          name: checkpointName,
          percentage,
          prevPercentage,
          ball,
          prevBall,
          topic,
          fullTopic,
          date: `${dayNum}-${curMonthName} holatiga ko‘ra`,
        };
      });
    }
  }, [history, hasHistory, timeRange, now, year, month, lastDayOfMonth, curMonthName]);

  return (
    <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#EAE5DD] shadow-2xs flex flex-col gap-2.5 w-full min-w-0">
      {/* Header and Legend Row */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-[#1E1A16] uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-[#8C6B38]" />
            <span className="text-xs sm:text-[13px]">Natijalar Taqqoslovi</span>
          </h4>

          {/* Haftalik / Oylik toggler */}
          <div className="inline-flex rounded-lg bg-[#FAF8F5] p-0.5 border border-[#EAE5DD] shrink-0">
            <button
              id="chart-range-weekly-btn"
              onClick={() => setTimeRange('weekly')}
              className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                timeRange === 'weekly'
                  ? 'bg-white text-[#8C6B38] shadow-3xs'
                  : 'text-[#736B60] hover:text-[#1E1A16]'
              }`}
            >
              Haftalik
            </button>
            <button
              id="chart-range-monthly-btn"
              onClick={() => setTimeRange('monthly')}
              className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                timeRange === 'monthly'
                  ? 'bg-white text-[#8C6B38] shadow-3xs'
                  : 'text-[#736B60] hover:text-[#1E1A16]'
              }`}
            >
              Oylik
            </button>
          </div>
        </div>

        {/* Custom Legend to match Warm Neutral aesthetic */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] text-[#736B60] bg-[#FAF8F5] p-1.5 rounded-lg border border-[#EAE5DD]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#8C6B38] rounded-full inline-block" />
            <span className="font-bold text-[#1E1A16] text-[10px] leading-[15.5px]">Hozirgi natija</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-[#C19A6B] inline-block" />
            <span className="font-semibold text-[#736B60] text-[10px] leading-[15.5px]">O'tgan safargi</span>
          </div>
        </div>
      </div>

      <div className="relative h-[160px] w-full flex items-center justify-center">
        {/* If no history, overlay a stylish onboarding cover */}
        {!hasHistory && (
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center text-center p-3">
            <Award className="w-7 h-7 text-[#8C6B38] mb-1.5 opacity-80" />
            <p className="text-[11px] font-bold text-[#1E1A16] max-w-[220px]">
              Taqqoslash grafigi testlardan so'ng faollashadi
            </p>
            <p className="text-[9px] text-[#736B60] max-w-[240px] mt-0.5">
              Sizning har bir yangi test natijangiz o'tgan safargisi bilan solishtirib boriladi.
            </p>
          </div>
        )}

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 20, left: -25, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F3EDE2"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke="#736B60"
              fontSize={9}
              tickLine={false}
              axisLine={false}
              dy={8}
            />
            <YAxis
              stroke="#736B60"
              fontSize={9}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              tickFormatter={(tick) => `${tick}%`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#8C6B38', strokeWidth: 1, strokeDasharray: '2 2' }}
              allowEscapeViewBox={{ x: false, y: true }}
            />

            {/* O'tgan safargi natija Line */}
            <Line
              type="monotone"
              dataKey="prevPercentage"
              stroke="#C19A6B"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={{ r: 3.5, strokeWidth: 1, stroke: '#FFFFFF', fill: '#C19A6B' }}
              activeDot={{ r: 4.5, strokeWidth: 1, stroke: '#FFFFFF', fill: '#C19A6B' }}
              name="O'tgan safargi"
            />

            {/* Hozirgi natija Line */}
            <Line
              type="monotone"
              dataKey="percentage"
              stroke="#8C6B38"
              strokeWidth={2.5}
              dot={{ r: 4.5, strokeWidth: 1, stroke: '#FFFFFF', fill: '#8C6B38' }}
              activeDot={{ r: 6, strokeWidth: 1, stroke: '#FFFFFF', fill: '#8C6B38' }}
              name="Hozirgi"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between text-[#736B60] border-t border-[#F3EDE2] pt-2 mt-1">
        <span style={{ fontSize: '11px' }}>
          {timeRange === 'weekly' ? 'Dushanba' : `1-${curMonthName}`}
        </span>
        {hasHistory ? (
          <span className="font-semibold text-emerald-700" style={{ fontSize: '11px' }}>
            O'sish farqi: {
              (() => {
                const last = chartData[chartData.length - 1];
                const diff = last.percentage - last.prevPercentage;
                return diff >= 0 ? `+${diff}% 📈` : `${diff}% 📉`;
              })()
            }
          </span>
        ) : (
          <span className="font-semibold text-[#8C6B38]" style={{ fontSize: '11px' }}>Namuna ko'rsatilmoqda</span>
        )}
        <span style={{ fontSize: '11px' }}>
          {timeRange === 'weekly' ? 'Yakshanba' : `${lastDayOfMonth}-${curMonthName}`}
        </span>
      </div>
    </div>
  );
};
