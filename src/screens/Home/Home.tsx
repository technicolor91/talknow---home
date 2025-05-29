import React from "react";
import { MainSection } from "./sections/MainSection/MainSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const Home = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#06020d] px-12 pt-16 fade-in">
      <div id="home">
        <MainSection />
      </div>
      <TestimonialsSection />
    </main>
  );
};
