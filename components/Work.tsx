"use client";

const projects = [
  {
    id: 1,
    category: "Game Highlights",
    title: "2023 Mountain West Championship Highlights",
    school: "Southern Utah University",
    description:
      "Full-length cinematic highlight film featuring wide-angle drone shots, slow-motion sequences, and color-graded footage from the championship run. Distributed across all official athletic channels.",
    tags: ["Final Cut Pro", "Drone", "Color Grade"],
    year: "2023",
    accent: "#d4af37",
  },
  {
    id: 2,
    category: "Recruiting Film",
    title: "2024 Football Recruiting Package",
    school: "University at Buffalo",
    description:
      "Elite prospect-targeted recruiting video series designed to showcase program culture, facilities, and on-field excellence. Resulted in top-25 recruiting class nationally.",
    tags: ["Adobe Premiere", "Motion Graphics", "Brand"],
    year: "2024",
    accent: "#d4af37",
  },
  {
    id: 3,
    category: "Social Media",
    title: "Game Week Content Series",
    school: "University at Buffalo",
    description:
      "Weekly social-first short-form content for Instagram Reels and Twitter — hype videos, player features, and opponent previews. Drove 40% increase in social engagement.",
    tags: ["Short Form", "After Effects", "Social"],
    year: "2024",
    accent: "#d4af37",
  },
  {
    id: 4,
    category: "Documentary Short",
    title: "Built Different — A Season Story",
    school: "Southern Utah University",
    description:
      "15-minute documentary following the SUU football team's journey through adversity and triumph. Premiered at end-of-season banquet and distributed to local broadcast.",
    tags: ["Documentary", "Interview", "Narrative"],
    year: "2022",
    accent: "#d4af37",
  },
  {
    id: 5,
    category: "Live Production",
    title: "ESPN+ Broadcast Package",
    school: "University at Buffalo",
    description:
      "Complete graphics and lower-thirds package for home games broadcast on ESPN+. Coordinated with network production team to deliver broadcast-ready assets.",
    tags: ["Live TV", "Graphics", "Broadcast"],
    year: "2023",
    accent: "#d4af37",
  },
  {
    id: 6,
    category: "Player Profile",
    title: "All-American Showcase Reels",
    school: "Southern Utah University",
    description:
      "Individual player highlight reels for NFL Draft prospects and All-Conference honorees, tailored for pro-day and combine distribution to NFL scouts.",
    tags: ["Premiere", "Editing", "Scouting"],
    year: "2022",
    accent: "#d4af37",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-[#d4af37] uppercase tracking-[0.4em] text-xs mb-4">
            Selected Projects
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            The Work
          </h2>
          <div className="cinema-divider w-16 mt-6" />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors duration-500 cursor-pointer overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/0 to-transparent group-hover:via-[#d4af37] transition-all duration-700" />

              {/* Category + year */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#d4af37] text-xs uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-white/30 text-xs">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-bold mb-2 leading-snug group-hover:text-[#d4af37] transition-colors duration-300">
                {project.title}
              </h3>

              {/* School */}
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
                {project.school}
              </p>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border border-white/10 text-white/40 uppercase tracking-wider group-hover:border-[#d4af37]/30 group-hover:text-white/60 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover corner arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#d4af37] text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
