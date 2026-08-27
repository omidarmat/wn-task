"use client";

import { catchError, type ErrorInfo } from "next/error";
import { useEffect } from "react";

function ErrorFallback(props: { title: string }, { error, retry }: ErrorInfo) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("🔴 Error =>", error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{props.title}</p>
      <button onClick={() => retry()}>Try again</button>
    </div>
  );
}

export default catchError(ErrorFallback);
