import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col items-center p-6 pb-36">
      {children}
    </div>
  );
}
