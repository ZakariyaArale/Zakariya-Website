import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 90 },
  { name: "C", level: 90 },
  { name: "JavaScript", level: 65 },
  { name: "HTML", level: 75 },
  { name: "React", level: 65 },
  { name: "XML", level: 70 },
  { name: "Tailwind", level: 65 },
  { name: "Pandas", level: 85 },
   { name: "Scikit-Learn", level: 85 },
  { name: "Matplotlib", level: 85 },
  { name: "Git & GitHub", level: 85 },
  { name: "Bash/Shell Scripting", level: 80 },
  { name: "Asynchronous Programming", level: 80 },
  { name: "App Development", level: 70 },
  { name: "Machine Learning", level: 85 },
  { name: "Jira", level: 95 },
  { name: "Scrum", level: 95 },
  { name: "Agile", level: 90 },
  { name: "Software Development Life Cycle", level: 85 },
  { name: "Object Oriented Programming", level: 90 },
];

export const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden">

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technical{" "}
            <span className="text-primary glow-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies, tools, and SWE concepts I’ve used to build impactful software.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 transition-all hover:border-primary/40 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="font-bold text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 rounded-full bg-background overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    background: "linear-gradient(90deg, #9B30FF, #b04bff)",
                    boxShadow: "0 0 12px rgba(155,48,255,0.45)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};