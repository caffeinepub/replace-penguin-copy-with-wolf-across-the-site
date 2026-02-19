import { useEffect } from 'react';
import { X, Rocket, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LaunchModal({ isOpen, onClose }: LaunchModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="launch-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-300" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-3xl bg-card border border-primary/30 rounded-2xl shadow-2xl neon-border animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full hover:bg-primary/10 hover:glow-sm"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Modal Header */}
        <div className="p-8 pb-6 border-b border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 neon-border animate-pulse-glow">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 id="launch-modal-title" className="text-3xl font-bold glow-text font-display">
                Wolf Pack Launch Roadmap
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                The journey to dominate the crypto wilderness
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Phase 1: DEX Soft Launch */}
          <div className="relative pl-8 pb-8 border-l-2 border-primary/50">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary neon-border flex items-center justify-center animate-pulse-glow">
              <div className="w-2 h-2 rounded-full bg-background" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-primary font-display">Phase 1: DEX Soft Launch</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 neon-border text-sm">
                <span className="font-semibold text-primary">March 31, 2026</span>
              </div>
              <p className="text-base text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Initial Expansion of Wolf World</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Lost Wolf emerges from the shadows onto decentralized exchanges. This marks the beginning of our journey, 
                allowing early pack members to trade $LWOLF tokens and establish the foundation of our community-driven ecosystem. 
                The soft launch phase focuses on building liquidity, gathering feedback, and strengthening the pack before the major expansion.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Platform</p>
                  <p className="text-sm font-semibold">Decentralized Exchange</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Focus</p>
                  <p className="text-sm font-semibold">Community Building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Tier 1 Exchange Launch */}
          <div className="relative pl-8">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent neon-border flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-background" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold text-accent font-display">Phase 2: Tier 1 Exchange Launch</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 neon-border text-sm">
                <span className="font-semibold text-accent">~End of June 2026</span>
                <span className="text-muted-foreground">(3 months after soft launch)</span>
              </div>
              <p className="text-base text-foreground leading-relaxed">
                <span className="font-semibold text-accent">Global Pack Expansion</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The wolf pack goes global. After establishing a strong foundation on DEX platforms, $LWOLF will be listed on 
                major Tier 1 centralized exchanges, bringing unprecedented visibility and accessibility to the project. This phase 
                represents the full expansion of the Wolf World, opening doors to millions of potential pack members worldwide and 
                solidifying our position in the crypto ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Platform</p>
                  <p className="text-sm font-semibold">Tier 1 CEX</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Focus</p>
                  <p className="text-sm font-semibold">Global Expansion</p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
                <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Major exchange listings will include enhanced trading pairs, increased liquidity, and access to institutional investors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-border bg-card/50">
          <p className="text-center text-sm text-muted-foreground">
            Join the pack early and be part of the Lost Wolf legend from the beginning
          </p>
        </div>
      </div>
    </div>
  );
}
