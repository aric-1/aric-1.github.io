import React from "react";

const CurrentWork: React.FC = () => {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">What I'm Doing Now</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Developing a Next.js + Tailwind personal website</li>
        <li>Building browser extensions for games</li>
        <li>Learning more about authentication and cloud deployment</li>
        <li>Watching new anime and reading manga</li>
        <li>Rooting for the Warriors in the playoffs </li>
      </ul>
    </section>
  );
};

export default CurrentWork;