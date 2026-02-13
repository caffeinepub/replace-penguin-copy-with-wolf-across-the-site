import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SiDiscord, SiX, SiInstagram, SiFacebook, SiReddit } from 'react-icons/si';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';
import { COMMUNITY_SOCIAL_LINKS } from '@/config/socialLinks';

const socialPlatforms = [
  {
    key: 'discord',
    icon: SiDiscord,
    ...COMMUNITY_SOCIAL_LINKS.discord,
  },
  {
    key: 'instagram',
    icon: SiInstagram,
    ...COMMUNITY_SOCIAL_LINKS.instagram,
  },
  {
    key: 'facebook',
    icon: SiFacebook,
    ...COMMUNITY_SOCIAL_LINKS.facebook,
  },
  {
    key: 'twitter',
    icon: SiX,
    ...COMMUNITY_SOCIAL_LINKS.twitter,
  },
  {
    key: 'reddit',
    icon: SiReddit,
    ...COMMUNITY_SOCIAL_LINKS.reddit,
  },
];

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
        
        <Card className={`max-w-4xl mx-auto neon-border bg-card/80 backdrop-blur-xl hover:glow-lg transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <CardHeader>
            <CardTitle className="text-2xl text-center font-display">Connect With Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                const isDisabled = !platform.url;
                
                if (isDisabled) {
                  return (
                    <div
                      key={platform.key}
                      className="h-auto flex flex-col gap-4 p-6 border border-muted/30 rounded-lg bg-muted/5 opacity-50 cursor-not-allowed"
                    >
                      <Icon className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div className="text-center">
                        <div className="font-bold text-lg mb-1">{platform.name}</div>
                        <div className="text-xs text-muted-foreground">Coming soon</div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Button
                    key={platform.key}
                    variant="outline"
                    size="lg"
                    className="h-auto flex-col gap-4 p-6 border-primary/50 hover:bg-primary/10 hover:glow-md transition-all group"
                    asChild
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-12 w-12 text-primary group-hover:animate-bounce-subtle" />
                      <div className="text-center">
                        <div className="font-bold text-lg mb-1">{platform.name}</div>
                        <div className="text-xs text-muted-foreground">{platform.description}</div>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
