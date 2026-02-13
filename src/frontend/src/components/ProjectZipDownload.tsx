import { useState } from 'react';
import { Download, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useActor } from '../hooks/useActor';
import { downloadZipFile } from '../utils/projectZipDownload';

export function ProjectZipDownload() {
  const { actor } = useActor();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  // Check authorization on mount
  useState(() => {
    if (actor) {
      setIsCheckingAuth(true);
      actor.isCallerAdmin()
        .then(setIsAuthorized)
        .catch(() => setIsAuthorized(false))
        .finally(() => setIsCheckingAuth(false));
    }
  });

  const handleDownload = async () => {
    if (!actor) {
      setError('Backend not available');
      return;
    }

    setIsDownloading(true);
    setError(null);

    try {
      const zipBytes = await actor.downloadProjectZip();
      downloadZipFile(zipBytes, 'lost-wolf-coin-project.zip');
    } catch (err: any) {
      console.error('Download error:', err);
      setError(err.message || 'Failed to download project ZIP');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDelete = async () => {
    if (!actor) {
      setError('Backend not available');
      return;
    }

    if (!confirm('Are you sure you want to remove the project ZIP? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      await actor.deleteProjectZip();
      setIsDeleted(true);
    } catch (err: any) {
      console.error('Delete error:', err);
      setError(err.message || 'Failed to delete project ZIP');
    } finally {
      setIsDeleting(false);
    }
  };

  // Show loading state while checking authorization
  if (isCheckingAuth) {
    return (
      <div className="p-6 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">Checking authorization...</span>
        </div>
      </div>
    );
  }

  // Show access denied if not authorized
  if (isAuthorized === false) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Access denied. Admin privileges required.
        </AlertDescription>
      </Alert>
    );
  }

  // Show success message if deleted
  if (isDeleted) {
    return (
      <Alert>
        <AlertDescription>
          Project ZIP has been removed successfully.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-6 border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Project Download</h3>
        <p className="text-sm text-muted-foreground">
          Download or remove the complete project ZIP file.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={handleDownload}
          disabled={isDownloading || isDeleting}
          className="gap-2"
        >
          {isDownloading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              Download Project ZIP
            </>
          )}
        </Button>

        <Button
          onClick={handleDelete}
          disabled={isDownloading || isDeleting}
          variant="destructive"
          className="gap-2"
        >
          {isDeleting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Removing...
            </>
          ) : (
            <>
              <Trash2 className="h-4 w-4" />
              Remove Download
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
