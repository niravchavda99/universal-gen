"use client";

export default function Home() {
    const theme = localStorage.getItem("theme");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      Universal Gen
      <div>{theme}</div>
    </main>
  );
}
