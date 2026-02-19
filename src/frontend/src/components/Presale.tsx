import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lock, Clock, TrendingUp } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useCountdown } from '@/hooks/useCountdown';

// Configurable constants for Phase 1
// Phase 1 started 2 days ago and runs for 60 days total
const PHASE_1_DURATION_DAYS = 60;
const PHASE_1_DAYS_ELAPSED = 2;
const PHASE_1_START = new Date(Date.now() - PHASE_1_DAYS_ELAPSED * 24 * 60 * 60 * 1000);
const PHASE_1_END = new Date(PHASE_1_START.getTime() + PHASE_1_DURATION_DAYS * 24 * 60 * 60 * 1000);

const PHASE_1_TOTAL_TOKENS = 10_000_000;
const PHASE_1_SOLD_PERCENT = 8; // 8% sold (baseline)
const PHASE_1_BASELINE_SOLD_TOKENS = Math.floor((PHASE_1_TOTAL_TOKENS * PHASE_1_SOLD_PERCENT) / 100);

// Visual increment rate: 5 tokens per second
const TOKENS_PER_SECOND = 5;

export function Presale() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const countdown = useCountdown(PHASE_1_END);

  // Visual counter state - starts from baseline and increments by 5 per second
  const [soldTokens, setSoldTokens] = useState(PHASE_1_BASELINE_SOLD_TOKENS);

  useEffect(() => {
    // Increment sold tokens by 5 every second
    const interval = setInterval(() => {
      setSoldTokens((prev) => {
        const next = prev + TOKENS_PER_SECOND;
        // Clamp to total tokens - never exceed the phase 1 total
        return Math.min(next, PHASE_1_TOTAL_TOKENS);
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Derive remaining tokens (never below 0)
  const remainingTokens = Math.max(PHASE_1_TOTAL_TOKENS - soldTokens, 0);

  // Calculate percentage sold (consistent rounding)
  const percentSold = Math.round((soldTokens / PHASE_1_TOTAL_TOKENS) * 100);

  return (
    <section
      id="presale"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'slide-up' : ''}`}>
          <Badge className="mb-4 text-sm px-4 py-1 neon-border">
            Token Presale
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text font-display">
            Join the Pack Early
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your $LWOLF tokens during our exclusive presale phases
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phase 1 - Active */}
          <Card
            className={`neon-border bg-card/50 backdrop-blur-sm transition-all duration-700 ${
              isInView ? 'slide-up' : ''
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl font-display">Phase 1</CardTitle>
                <Badge className="bg-primary text-primary-foreground">Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Early Bird Special</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Countdown Timer */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Time Remaining</span>
                </div>
                {countdown.ended ? (
                  <div className="text-center py-4">
                    <p className="text-lg font-semibold text-destructive">Phase 1 Ended</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center p-3 rounded-lg bg-primary/10 neon-border">
                      <div className="text-2xl font-bold text-primary">{countdown.days}</div>
                      <div className="text-xs text-muted-foreground">Days</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-primary/10 neon-border">
                      <div className="text-2xl font-bold text-primary">{countdown.hours}</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-primary/10 neon-border">
                      <div className="text-2xl font-bold text-primary">{countdown.minutes}</div>
                      <div className="text-xs text-muted-foreground">Mins</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-primary/10 neon-border">
                      <div className="text-2xl font-bold text-primary">{countdown.seconds}</div>
                      <div className="text-xs text-muted-foreground">Secs</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Token Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>Token Sales Progress</span>
                  </div>
                  <span className="text-sm font-semibold text-primary">{percentSold}% sold</span>
                </div>
                <Progress value={percentSold} className="h-3" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Tokens Sold</p>
                    <p className="text-lg font-semibold text-primary">
                      {soldTokens.toLocaleString()}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Tokens Remaining</p>
                    <p className="text-lg font-semibold text-foreground">
                      {remainingTokens.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Total Phase 1: <span className="font-semibold text-foreground">{PHASE_1_TOTAL_TOKENS.toLocaleString()}</span> tokens
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2 - Locked */}
          <Card
            className={`neon-border bg-card/30 backdrop-blur-sm opacity-60 transition-all duration-700 ${
              isInView ? 'slide-up' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl font-display">Phase 2</CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <Lock className="h-3 w-3" />
                  Locked
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Community Round</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-8">
                <Lock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-semibold text-muted-foreground">
                  Waiting for Phase 2
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Unlocks after Phase 1 completion
                </p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Bonus:</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">30 days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Stage - Locked */}
          <Card
            className={`neon-border bg-card/30 backdrop-blur-sm opacity-60 transition-all duration-700 ${
              isInView ? 'slide-up' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl font-display">Final Stage</CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <Lock className="h-3 w-3" />
                  Locked
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Public Sale</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-8">
                <Lock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-semibold text-muted-foreground">
                  Waiting for Final Stage
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Unlocks after Phase 2 completion
                </p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Bonus:</span>
                  <span className="font-semibold">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">15 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center ${isInView ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground">
            All presale participants receive exclusive pack member benefits and early access to future features
          </p>
        </div>
      </div>
    </section>
  );
}
