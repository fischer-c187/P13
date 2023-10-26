import { useEffect } from 'react';

/**
 * Custom hook to update the document title when navigating to a new page.
 *
 * @param {string} title - The new title to be displayed on the document.
 */
export function useUpdateTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}