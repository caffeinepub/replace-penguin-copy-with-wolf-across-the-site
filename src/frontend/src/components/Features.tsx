import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Shield, Zap, Target } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'WOLF delivers unmatched performance with blazing-fast speeds that keep you ahead of the competition.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security at its core, WOLF ensures your data and operations are always protected.',
  },
  {
    icon: Rocket,
    title: 'Scalable Solution',
    description: 'WOLF grows with your needs, providing seamless scalability from startup to enterprise.',
  },
  {
    icon: Target,
    title: 'Precision Focused',
    description: 'Every feature in WOLF is designed with precision to deliver exactly what you need, when you need it.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
            Why Choose WOLF?
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the features that make WOLF the ultimate choice for modern applications.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur transition-all hover:shadow-lg hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
