"use client";

import { algorithms } from "@/lib/models/algorithm.model";
import { GeneratorCard } from "@/components/generator-card/generator-card";
import { Toaster } from "@/components/ui/toaster";
import "./Generator.css";

export default function Home() {
  return (
    <section className="max-container w-full p-8">
      <title>Generator | Nirav Chavda</title>
      <h1 className="head-text text-center">
        <span className="blue-gradient_text font-semibold drop-shadow">
          Generator
        </span>
      </h1>
      <div className="flex flew-row gap-4 flex-wrap justify-center mt-4">
        {algorithms.map((algorithm) => (
          <GeneratorCard key={algorithm.type} algorithm={algorithm} />
        ))}
      </div>
      <Toaster />
    </section>
  );
}
