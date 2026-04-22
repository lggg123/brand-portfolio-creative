"use client";

const skills = [
  { name: "Cinematography", level: 95 },
  { name: "Adobe Premiere Pro", level: 98 },
  { name: "Final Cut Pro", level: 92 },
  { name: "Adobe After Effects", level: 85 },
  { name: "Color Grading (DaVinci)", level: 88 },
  { name: "Drone Operations (FAA Part 107)", level: 90 },
  { name: "Live Broadcast Production", level: 80 },
  { name: "Motion Graphics", level: 82 },
];

const experiences = [
  {
    role: "Director of Football Video",
    school: "University at Buffalo",
    league: "NCAA Division I — MAC Conference",
    period: "2022 – Present",
    highlights: [
      "Lead all football video operations for D1 program",
      "Produced recruiting packages that supported top-25 signing classes",
      "Managed ESPN+ broadcast graphics and live production",
      "Built and led a team of 4 video staff and student videographers",
    ],
  },
  {
    role: "Football Video Coordinator",
    school: "Southern Utah University",
    league: "NCAA Division I — WAC / Big Sky Conference",
    period: "2019 – 2022",
    highlights: [
      "Produced all game highlight, recruiting, and social content",
      "Created award-winning documentary shorts for program storytelling",
      "Collaborated with coaching staff on opponent analysis video",
      "Managed full video equipment inventory and production workflow",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-[#d4af37] uppercase tracking-[0.4em] text-xs mb-4">
            Background
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            About
          </h2>
          <div className="cinema-divider w-16 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
              Telling championship stories{" "}
              <span className="text-[#d4af37]">frame by frame.</span>
            </h3>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
              <p>
                I'm Aaron Cantu — a video director, cinematographer, and
                storyteller obsessed with the art of sports filmmaking. With
                over 5 years embedded in D1 football programs, I know what it
                takes to capture the emotion, grit, and glory that define
                championship culture.
              </p>
              <p>
                From the sidelines of Mountain West games to the editing bay at
                4 AM before a rivalry week release, I bring the same intensity
                to every project. My work spans game highlights, recruiting
                films, documentary shorts, social content, and live broadcast —
                all with one goal: make the audience feel something.
              </p>
              <p>
                Beyond the craft, I'm a collaborator. I work closely with
                coaching staffs, athletic communications teams, and recruits'
                families to ensure every story is told with authenticity and
                purpose.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              {[
                { number: "5+", label: "Years D1 Experience" },
                { number: "200+", label: "Videos Produced" },
                { number: "2", label: "D1 Programs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-[#d4af37] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills + Experience */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">
                Core Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-white/70 text-sm">{skill.name}</span>
                      <span className="text-[#d4af37] text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-px bg-white/10 relative">
                      <div
                        className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#d4af37] to-[#e8c84a]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">
                Experience
              </h4>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.school}
                    className="border-l-2 border-[#d4af37]/30 pl-5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h5 className="text-white font-semibold text-sm">
                        {exp.role}
                      </h5>
                      <span className="text-white/30 text-xs whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#d4af37] text-xs mb-1">{exp.school}</p>
                    <p className="text-white/30 text-xs mb-3">{exp.league}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="text-white/50 text-xs flex gap-2"
                        >
                          <span className="text-[#d4af37] mt-0.5">—</span>
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
