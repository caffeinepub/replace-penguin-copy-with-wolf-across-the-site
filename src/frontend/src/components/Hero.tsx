import { Button } from '@/components/ui/button';
import { ShoppingCart, Users, FileText } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useParallax } from '@/hooks/useParallax';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const parallaxOffset = useParallax(0.3);

  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <img 
          src="/assets/generated/hero-wolf-neon-snow.dim_1920x1080.png"
          alt="Lost Wolf in neon city"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Animated Wolf Character */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative animate-breathe">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" 
               style={{ boxShadow: '0 0 20px oklch(var(--primary))' }} 
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 py-20">
        <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl font-display">
            <span className="block mb-2">Lost Wolf Coin</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-text animate-shimmer bg-[length:200%_auto]">
              The Hunt Begins
            </span>
          </h1>
          
          <p className="mb-12 text-lg text-muted-foreground md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            A wolf lost in the city, searching for the missing piece of his soul.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 group neon-border hover:glow-md transition-all text-base px-8 py-6"
            >
              <ShoppingCart className="h-5 w-5" />
              Buy $LWOLF
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 group border-primary/50 hover:bg-primary/10 hover:glow-sm transition-all text-base px-8 py-6"
            >
              <Users className="h-5 w-5" />
              Join The Pack
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 group hover:glow-sm transition-all text-base px-8 py-6"
            >
              <FileText className="h-5 w-5" />
              Read Whitepaper
            </Button>
          </div>
        </div>
      </div>

      {/* Snow Effect Overlay */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
    </section>
  );
}
