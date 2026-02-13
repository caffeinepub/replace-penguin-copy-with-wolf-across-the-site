# Specification

## Summary
**Goal:** Add a temporary, admin-only way to download a single Project ZIP from the app, and then remove/disable the download after use.

**Planned changes:**
- Backend: store and persist a single Project ZIP archive; provide a read method that returns the ZIP bytes for browser download.
- Backend: add an owner/admin-restricted method to clear/delete the stored ZIP so it is no longer downloadable.
- Frontend: implement `frontend/src/components/ProjectZipDownload.tsx` with two actions: “Download Project ZIP” and “Remove/Disable Download”, with clear status messaging.
- Frontend: gate the component so it is not shown to normal visitors (e.g., enabled only via an admin-only flag/query param) and wire access somewhere that does not re-add a public download section on the landing page.

**User-visible outcome:** In admin-only mode, the user can download `project.zip` from the app and then remove/disable the download so it’s no longer available; normal visitors won’t see the download UI.
