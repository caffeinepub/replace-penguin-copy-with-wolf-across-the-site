# Specification

## Summary
**Goal:** Add outbound social media links for Discord, Instagram, Facebook, Twitter/X, and Reddit to the Community section and align the footer Community links to match.

**Planned changes:**
- Update `frontend/src/components/Community.tsx` to render 5 distinct social link cards/buttons (Discord, Instagram, Facebook, Twitter/X, Reddit) as real outbound anchors that open in a new tab with `rel="noopener noreferrer"`, while preserving the existing neon/glow styling and responsiveness.
- Add a single configuration object/constant in the Community component for the 5 platform URLs; when a URL is empty/undefined, render the corresponding item as disabled/non-clickable with an “unavailable” indication while keeping layout consistent.
- Update `frontend/src/components/Footer.tsx` Community link list to include Discord, Instagram, Facebook, Twitter/X, and Reddit, linking to the same configured external URLs and opening in a new tab with `rel="noopener noreferrer"`.

**User-visible outcome:** Users can click clearly labeled Discord/Instagram/Facebook/Twitter/X/Reddit items in the Community section and footer to open the correct external pages in a new tab (or see an unavailable/disabled state if a link isn’t configured).
