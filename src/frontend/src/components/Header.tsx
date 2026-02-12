import { Button } from '@/components/ui/button';
import { Menu, Wallet, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight text-foreground font-display glow-text">
            Lost Wolf Coin
          </div>
          <span className="text-sm font-medium text-primary">$LWOLF</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Story
          </button>
          <button 
            onClick={() => scrollToSection('tokenomics')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Tokenomics
          </button>
          <button 
            onClick={() => scrollToSection('presale')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Presale
          </button>
          <button 
            onClick={() => scrollToSection('roadmap')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Roadmap
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Community
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="default" 
            size="sm" 
            className="hidden md:inline-flex gap-2 neon-border hover:glow-sm transition-all"
          >
            <Wallet className="h-4 w-4" />
            Wallet Connect
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col gap-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Story
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => scrollToSection('presale')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Presale
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left py-2"
            >
              Community
            </button>
            <Button 
              variant="default" 
              size="sm" 
              className="gap-2 neon-border hover:glow-sm transition-all mt-2"
            >
              <Wallet className="h-4 w-4" />
              Wallet Connect
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
