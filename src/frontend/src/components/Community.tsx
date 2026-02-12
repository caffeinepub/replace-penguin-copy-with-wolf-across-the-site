import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SiDiscord, SiX, SiTelegram } from 'react-icons/si';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

export function Community() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="community" ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative z-10">
        <div className={`mx-auto max-w-4xl text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl mb-4 font-display glow-text">
            Join The Pack
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with fellow wolves and be part of the journey
          </p>
        </div>
        
        <Card className={`max-w-3xl mx-auto neon-border bg-card/80 backdrop-blur-xl hover:glow-lg transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <CardHeader>
            <CardTitle className="text-2xl text-center font-display">Connect With Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Discord */}
              <Button 
                variant="outline"
                size="lg"
                className="h-auto flex-col gap-4 p-6 border-primary/50 hover:bg-primary/10 hover:glow-md transition-all group"
              >
                <SiDiscord className="h-12 w-12 text-primary group-hover:animate-bounce-subtle" />
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">Discord</div>
                  <div className="text-xs text-muted-foreground">Join our community</div>
                </div>
              </Button>

              {/* Twitter/X */}
              <Button 
                variant="outline"
                size="lg"
                className="h-auto flex-col gap-4 p-6 border-primary/50 hover:bg-primary/10 hover:glow-md transition-all group"
              >
                <SiX className="h-12 w-12 text-primary group-hover:animate-bounce-subtle" />
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">Twitter/X</div>
                  <div className="text-xs text-muted-foreground">Follow for updates</div>
                </div>
              </Button>

              {/* Telegram */}
              <Button 
                variant="outline"
                size="lg"
                className="h-auto flex-col gap-4 p-6 border-primary/50 hover:bg-primary/10 hover:glow-md transition-all group"
              >
                <SiTelegram className="h-12 w-12 text-primary group-hover:animate-bounce-subtle" />
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">Telegram</div>
                  <div className="text-xs text-muted-foreground">Chat with the pack</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
