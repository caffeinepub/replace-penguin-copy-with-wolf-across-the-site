// Centralized social media links configuration
// Update these URLs with your actual social media channels

export interface SocialLink {
  name: string;
  url: string;
  description: string;
}

export const COMMUNITY_SOCIAL_LINKS: Record<string, SocialLink> = {
  discord: {
    name: 'Discord',
    url: '', // Add your Discord invite URL here
    description: 'Join our community',
  },
  instagram: {
    name: 'Instagram',
    url: '', // Add your Instagram profile URL here
    description: 'Follow our journey',
  },
  facebook: {
    name: 'Facebook',
    url: '', // Add your Facebook page URL here
    description: 'Like our page',
  },
  twitter: {
    name: 'X',
    url: '', // Add your Twitter/X profile URL here
    description: 'Follow for updates',
  },
  reddit: {
    name: 'Reddit',
    url: '', // Add your Reddit community URL here
    description: 'Join the discussion',
  },
};
