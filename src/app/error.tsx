"use client";

import { useEffect } from "react";

interface PropTypes {
  error: Error & { digest?: string };
  retry: () => void;
}

export default function ErrorPage({ error, retry }: PropTypes) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("🔴 Error =>", error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Error code: {error?.name}</p>
      <p>Error message: {error?.message}</p>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => retry()
        }
      >
        Try again
      </button>
    </div>
  );
}
