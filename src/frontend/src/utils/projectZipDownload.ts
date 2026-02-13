/**
 * Utility to trigger a browser download from Uint8Array ZIP bytes
 */
export function downloadZipFile(zipBytes: Uint8Array, filename: string = 'project.zip'): void {
  try {
    // Convert to a new Uint8Array with proper ArrayBuffer to satisfy TypeScript
    const bytes = new Uint8Array(zipBytes);
    
    // Create a Blob from the Uint8Array
    const blob = new Blob([bytes], { type: 'application/zip' });
    
    // Create an object URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = 'none';
    
    document.body.appendChild(anchor);
    anchor.click();
    
    // Clean up
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to download ZIP file:', error);
    throw new Error('Failed to download project ZIP');
  }
}
