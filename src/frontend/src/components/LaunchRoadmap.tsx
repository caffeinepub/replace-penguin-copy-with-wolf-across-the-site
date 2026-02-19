import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Calendar, TrendingUp } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { LaunchModal } from './LaunchModal';

export function LaunchRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="launch-roadmap"
        ref={sectionRef}
        className="relative py-24 px-4 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
        
        <div className="container relative z-10 max-w-4xl mx-auto">
          {/* Section Content */}
          <div className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 neon-border mb-6 animate-pulse-glow">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text font-display">
                Wolf Pack Launch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                The hunt begins with our DEX soft launch, marking the initial expansion of the Wolf World
              </p>
            </div>

            {/* Launch Button */}
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="gap-3 group neon-border hover:glow-md transition-all text-lg px-12 py-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer bg-[length:200%_auto]" />
              <Calendar className="h-6 w-6 relative z-10" />
              <div className="relative z-10 flex flex-col items-start">
                <span className="text-sm font-normal opacity-80">DEX Soft Launch</span>
                <span className="text-xl font-bold">March 31, 2026</span>
              </div>
              <TrendingUp className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">
              Click to view the complete launch roadmap
            </p>
          </div>
        </div>
      </section>

      {/* Launch Modal */}
      <LaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
