import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Building2, Heart, Users } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

const phases = [
  {
    phase: 'Phase 1: Awakening',
    icon: Sparkles,
    description: 'The wolf opens his eyes in the frozen neon city. Token launch, community building, and initial partnerships.',
  },
  {
    phase: 'Phase 2: The City Hunt',
    icon: Building2,
    description: 'Navigating through urban shadows. Major exchange listings, marketing campaigns, and ecosystem expansion.',
  },
  {
    phase: 'Phase 3: Partner Discovery',
    icon: Heart,
    description: 'Following the glowing trail. Strategic collaborations, utility development, and staking rewards launch.',
  },
  {
    phase: 'Phase 4: Pack Expansion',
    icon: Users,
    description: 'The pack grows stronger together. Global community events, NFT collection, and metaverse integration.',
  },
];

export function Roadmap() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="roadmap" ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      <div className="container relative z-10">
        <div className={`mx-auto max-w-4xl text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl mb-4 font-display glow-text">
            Quest Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow the wolf's journey through four legendary phases
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden sm:block" />
          
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative transition-all duration-1000 delay-${index * 100} ${
                    isInView 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className="flex-1">
                      <Card className="neon-border bg-card/80 backdrop-blur-xl hover:glow-md transition-all group">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                              <Icon className="h-6 w-6 text-primary animate-bounce-subtle" />
                            </div>
                            <CardTitle className="text-xl font-display">{phase.phase}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:block relative z-20">
                      <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" 
                           style={{ boxShadow: '0 0 20px oklch(var(--primary))' }} 
                      />
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
