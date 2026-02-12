import { useInView } from '@/hooks/useInView';
import { useRef, useState } from 'react';

const memeChartData = [
  { name: 'Public Sale', emoji: '🐺', percentage: 35, color: 'oklch(var(--chart-1))' },
  { name: 'Liquidity', emoji: '💧', percentage: 20, color: 'oklch(var(--chart-2))' },
  { name: 'Rewards', emoji: '🎁', percentage: 15, color: 'oklch(var(--chart-3))' },
  { name: 'Marketing', emoji: '📢', percentage: 10, color: 'oklch(var(--chart-4))' },
  { name: 'Dev Team', emoji: '🛠️', percentage: 10, color: 'oklch(var(--chart-5))' },
  { name: 'Airdrops', emoji: '🎉', percentage: 5, color: 'oklch(var(--chart-6))' },
  { name: 'Treasury', emoji: '🏦', percentage: 5, color: 'oklch(var(--chart-7))' },
];

export function MemeTokenomicsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = memeChartData.reduce((sum, item) => sum + item.percentage, 0);
  let currentAngle = -90;

  const slices = memeChartData.map((item, index) => {
    const sliceAngle = (item.percentage / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 50 + 40 * Math.cos(startRad);
    const y1 = 50 + 40 * Math.sin(startRad);
    const x2 = 50 + 40 * Math.cos(endRad);
    const y2 = 50 + 40 * Math.sin(endRad);

    const largeArc = sliceAngle > 180 ? 1 : 0;

    const pathData = [
      `M 50 50`,
      `L ${x1} ${y1}`,
      `A 40 40 0 ${largeArc} 1 ${x2} ${y2}`,
      `Z`,
    ].join(' ');

    return { ...item, pathData, index };
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-8">
      {/* Chart */}
      <div className={`relative w-full max-w-sm aspect-square transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <svg 
          viewBox="0 0 100 100" 
          className={`w-full h-full ${isInView && !prefersReducedMotion ? 'animate-rotate-slow' : ''}`}
          style={{ filter: 'drop-shadow(0 0 20px oklch(var(--primary) / 0.5))' }}
        >
          {/* Outer glow ring */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="oklch(var(--primary) / 0.3)"
            strokeWidth="0.5"
            className="animate-pulse-glow"
          />
          
          {/* Donut hole */}
          <circle cx="50" cy="50" r="20" fill="oklch(var(--background))" />
          
          {/* Slices */}
          {slices.map((slice) => (
            <path
              key={slice.index}
              d={slice.pathData}
              fill={slice.color}
              stroke="oklch(var(--background))"
              strokeWidth="0.5"
              className="transition-all cursor-pointer"
              style={{
                filter: `drop-shadow(0 0 5px ${slice.color})`,
                opacity: hoveredIndex === null || hoveredIndex === slice.index ? 1 : 0.6,
                transform: hoveredIndex === slice.index ? 'scale(1.02)' : 'scale(1)',
                transformOrigin: '50% 50%',
              }}
              onMouseEnter={() => setHoveredIndex(slice.index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
          
          {/* Center glow */}
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="oklch(var(--primary) / 0.5)"
            strokeWidth="0.3"
            className="animate-pulse-glow"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className={`flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        {memeChartData.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all hover:glow-sm cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.7,
            }}
          >
            <div className="text-2xl flex-shrink-0">{item.emoji}</div>
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ 
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}`
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-foreground truncate">{item.name}</div>
              <div className="text-xs text-muted-foreground font-medium">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
