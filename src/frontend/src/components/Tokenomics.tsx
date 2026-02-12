import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TokenomicsChart } from './TokenomicsChart';
import { MemeTokenomicsChart } from './MemeTokenomicsChart';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

const allocationData = [
  { allocation: 'Public Sale', percentage: '35%', tokens: '350,000,000' },
  { allocation: 'Liquidity Pool', percentage: '20%', tokens: '200,000,000' },
  { allocation: 'Ecosystem Rewards', percentage: '15%', tokens: '150,000,000' },
  { allocation: 'Marketing & Partnerships', percentage: '10%', tokens: '100,000,000' },
  { allocation: 'Team & Development (Vested)', percentage: '10%', tokens: '100,000,000' },
  { allocation: 'Community Airdrop', percentage: '5%', tokens: '50,000,000' },
  { allocation: 'Treasury / Future Fund', percentage: '5%', tokens: '50,000,000' },
];

export function Tokenomics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="tokenomics" ref={ref} className="py-20 md:py-32 bg-muted/20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl mb-4 font-display glow-text">
              LOST WOLF COIN ($LWOLF) — Full Tokenomics
            </h2>
            <p className="text-xl text-muted-foreground">
              Total Supply: <span className="font-bold text-primary glow-text">1,000,000,000 $LWOLF</span>
            </p>
          </div>

          {/* Animated Chart */}
          <div className="mb-16">
            <TokenomicsChart />
          </div>

          {/* Allocation Table */}
          <Card className="mb-12 neon-border bg-card/80 backdrop-blur-xl hover:glow-sm transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Token Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Allocation</TableHead>
                    <TableHead className="font-bold text-center">%</TableHead>
                    <TableHead className="font-bold text-right">Tokens</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allocationData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-primary/5 transition-colors">
                      <TableCell className="font-medium">{row.allocation}</TableCell>
                      <TableCell className="text-center text-primary font-bold">{row.percentage}</TableCell>
                      <TableCell className="text-right">{row.tokens}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Professional Whitepaper Section */}
          <Card className="mb-12 neon-border bg-card/80 backdrop-blur-xl hover:glow-sm transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-display">📌 Whitepaper Section (Professional)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Tokenomics</h3>
                <p className="text-muted-foreground">
                  Lost Wolf Coin ($LWOLF) is designed with a sustainable and community-first distribution model. The total supply is fixed at 1 billion tokens, ensuring transparency and scarcity.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Public Sale (35%)</h4>
                <p className="text-muted-foreground">
                  A major portion of tokens is allocated to early supporters and community participants through a fair public sale.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Liquidity Pool (20%)</h4>
                <p className="text-muted-foreground">
                  Liquidity allocation ensures smooth trading, reduced volatility, and long-term exchange stability.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Ecosystem Rewards (15%)</h4>
                <p className="text-muted-foreground">
                  Reserved for staking incentives, future utilities, in-game rewards, and ecosystem expansion.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Marketing & Partnerships (10%)</h4>
                <p className="text-muted-foreground">
                  Used to grow the Lost Wolf brand through collaborations, influencers, listings, and strategic partnerships.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Team & Development (10%)</h4>
                <p className="text-muted-foreground mb-3">
                  Team tokens are locked with vesting to ensure long-term commitment:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>12-month cliff</li>
                  <li>Gradual release over 24 months</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Community Airdrops (5%)</h4>
                <p className="text-muted-foreground">
                  Dedicated to rewarding early adopters, loyal holders, and active community members.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Treasury Fund (5%)</h4>
                <p className="text-muted-foreground">
                  Reserved for future development, emergencies, and long-term sustainability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Meme Coin Style Version */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 neon-border hover:glow-md transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-display">🐺 Meme Coin Style Version (Fun + Viral)</CardTitle>
              <CardDescription className="text-lg">$LWOLF Tokenomics 🐾</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-6">
                <p className="text-lg font-medium text-foreground mb-1">Lost Wolf isn't just a coin…</p>
                <p className="text-lg font-medium text-foreground">It's a journey.</p>
              </div>

              <p className="text-lg font-bold mb-4">Here's how the pack is fed:</p>

              <div className="space-y-3 text-base">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🐺</span>
                  <span><span className="font-bold">35% Public Sale</span> — For the Wolves</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">💧</span>
                  <span><span className="font-bold">20% Liquidity</span> — So trading never freezes</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span><span className="font-bold">15% Rewards</span> — Staking + Ecosystem loot</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">📢</span>
                  <span><span className="font-bold">10% Marketing</span> — Memes go global</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🛠️</span>
                  <span><span className="font-bold">10% Dev Team</span> — Locked & loyal</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <span><span className="font-bold">5% Airdrops</span> — Surprise drops for the pack</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">🏦</span>
                  <span><span className="font-bold">5% Treasury</span> — Future of the hunt</span>
                </p>
              </div>

              {/* Meme Tokenomics Chart */}
              <MemeTokenomicsChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
