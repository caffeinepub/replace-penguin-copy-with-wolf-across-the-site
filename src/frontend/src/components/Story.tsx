import { Card } from '@/components/ui/card';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="story" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
        <img 
          src="/assets/generated/split-city-forest-bg.dim_1920x1080.png"
          alt="City and forest split scene"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container relative z-20">
        <div className={`mx-auto max-w-4xl transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl mb-8 text-center font-display glow-text">
            The Legend of Lost Wolf
          </h2>
          
          <Card className="neon-border bg-card/80 backdrop-blur-xl p-8 md:p-12 hover:glow-sm transition-all">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              In a frozen neon world, one wolf was separated from his partner… Now the journey begins across city shadows and silent forests.
            </p>
          </Card>

          {/* Animated Scene */}
          <div className="mt-12 relative">
            <div className="relative rounded-2xl overflow-hidden neon-border hover:glow-md transition-all">
              <img 
                src="/assets/generated/gallery-scene-03-forest-skyscrapers.dim_1400x900.png"
                alt="Wolf between forest and skyscrapers"
                className="w-full h-auto animate-breathe"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
