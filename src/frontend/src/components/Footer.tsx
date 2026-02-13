import { Heart } from 'lucide-react';
import { ProjectZipDownload } from './ProjectZipDownload';
import { isAdminModeEnabled } from '../utils/adminGate';

export function Footer() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  const showAdminSection = isAdminModeEnabled();

  return (
    <footer className="border-t border-primary/20 bg-background/95 backdrop-blur-xl">
      <div className="container py-12">
        {/* Admin-only section - only visible with ?admin=true or #admin=true */}
        {showAdminSection && (
          <div className="mb-12 pb-8 border-b border-primary/20">
            <ProjectZipDownload />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-display glow-text">Lost Wolf Coin</h3>
            <p className="text-sm text-muted-foreground">
              A wolf lost in the city, searching for the missing piece of his soul.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#story" className="hover:text-primary transition-colors">Story</a></li>
              <li><a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#community" className="hover:text-primary transition-colors">Join Discord</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Follow on X</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Telegram Group</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Copyright © 2026 Lost Wolf Coin</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse-glow" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
