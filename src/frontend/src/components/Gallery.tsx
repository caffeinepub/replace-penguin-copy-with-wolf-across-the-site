import { Card } from '@/components/ui/card';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

const scenes = [
  {
    title: 'Wolf walking alone in neon city snow',
    image: '/assets/generated/gallery-scene-01-wolf-neon-snow.dim_1400x900.png',
  },
  {
    title: 'Wolf looking at a missing partner poster',
    image: '/assets/generated/gallery-scene-02-missing-poster.dim_1400x900.png',
  },
  {
    title: 'Wolf standing between forest and skyscrapers',
    image: '/assets/generated/gallery-scene-03-forest-skyscrapers.dim_1400x900.png',
  },
  {
    title: 'Wolf howling under moon above buildings',
    image: '/assets/generated/gallery-scene-04-howl-moon-city.dim_1400x900.png',
  },
  {
    title: 'Wolf finding a glowing pawprint trail',
    image: '/assets/generated/gallery-scene-05-glowing-pawprints.dim_1400x900.png',
  },
  {
    title: 'Wolf silhouette with partner shadow appearing',
    image: '/assets/generated/gallery-scene-06-partner-shadow.dim_1400x900.png',
  },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-muted/20">
      <div className="container">
        <div className={`mx-auto max-w-4xl text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl mb-4 font-display glow-text">
            The Journey in Scenes
          </h2>
          <p className="text-lg text-muted-foreground">
            Witness the wolf's emotional quest through cinematic moments
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {scenes.map((scene, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden neon-border bg-card/50 backdrop-blur-xl hover:glow-md transition-all duration-700 delay-${index * 100} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-foreground">{scene.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
