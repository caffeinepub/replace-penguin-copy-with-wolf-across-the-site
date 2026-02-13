/**
 * Lightweight client-side gate for admin-only UI visibility
 * This is NOT a security measure - backend authorization is still required
 */
export function isAdminModeEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for admin mode via URL parameter or hash
  const urlParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.slice(1));
  
  // Enable admin mode if ?admin=true or #admin=true
  return urlParams.get('admin') === 'true' || hashParams.get('admin') === 'true';
}
