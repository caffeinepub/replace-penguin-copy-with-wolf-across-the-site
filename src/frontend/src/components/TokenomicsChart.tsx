import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

const chartData = [
  { name: 'Public Sale', percentage: 35, color: 'oklch(var(--chart-1))' },
  { name: 'Liquidity Pool', percentage: 20, color: 'oklch(var(--chart-2))' },
  { name: 'Rewards', percentage: 15, color: 'oklch(var(--chart-3))' },
  { name: 'Marketing', percentage: 10, color: 'oklch(var(--chart-4))' },
  { name: 'Team (Vested)', percentage: 10, color: 'oklch(var(--chart-5))' },
  { name: 'Airdrop', percentage: 5, color: 'oklch(var(--chart-6))' },
  { name: 'Treasury', percentage: 5, color: 'oklch(var(--chart-7))' },
];

export function TokenomicsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  const total = chartData.reduce((sum, item) => sum + item.percentage, 0);
  let currentAngle = -90;

  const slices = chartData.map((item) => {
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

    return { ...item, pathData };
  });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Chart */}
      <div className={`relative w-full max-w-md aspect-square transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <svg 
          viewBox="0 0 100 100" 
          className={`w-full h-full ${isInView ? 'animate-rotate-slow' : ''}`}
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
          {slices.map((slice, index) => (
            <path
              key={index}
              d={slice.pathData}
              fill={slice.color}
              stroke="oklch(var(--background))"
              strokeWidth="0.5"
              className="transition-all hover:opacity-80"
              style={{
                filter: `drop-shadow(0 0 5px ${slice.color})`,
              }}
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
      <div className={`flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        {chartData.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all hover:glow-sm"
          >
            <div 
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ 
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}`
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
