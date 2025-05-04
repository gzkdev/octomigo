import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col items-center px-6 py-16">
      {children}
    </div>
  );
}
