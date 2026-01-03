import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/button/AnimatedBorderButton";

const projects = [
  {
    title: "SmartAir",
    description:
      "Collaborated with a team of five to build an app that securely helps parents manage their child’s healthcare data while enabling children to interactively learn and track their lung performance",
    image: `${import.meta.env.BASE_URL}projects/project1.png`,
    tags: ["Android", "Java", "XML", "Scrum", "Firebase", "OOP"],
    link: "https://github.com/ZakariyaArale/SmartAir",
  },
  {
    title: "Async_Battleship",
    description:
      "Built a high-performance asynchronous server that manages client connections and synchronizes gameplay to simulate the classic Battleship experience",
    image: `${import.meta.env.BASE_URL}projects/project2.png`,
    tags: ["C", "Linux", "Makefile"],
    link: "https://github.com/ZakariyaArale/Async_Battleship",
  },
  {
    title: "Cardio_Predictor",
    description:
      "Engineered a Random Forest machine learning model with scikit-learn to accurately predict cardiovascular disease risk from patient health data",
    image: `${import.meta.env.BASE_URL}projects/project3.png`,
    tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    link: "https://github.com/ZakariyaArale/Cardio_Predictor",
  },
  {
    title: "AccountSim",
    description:
      "Developed an interactive Java program that simulates secure bank account transactions, including account creation, deposits, withdrawals, interest calculation, and login authentication",
    image: `${import.meta.env.BASE_URL}projects/project4.png`,
    tags: ["Java", "OOP"],
    link: "https://github.com/ZakariyaArale/AccountSim",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            My
            <span className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground glow-text">
              {" "}
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are a few projects I’ve recently built, showcasing my passion for designing and deploying various softwares!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4
                    opacity-100 md:opacity-0 md:group-hover:opacity-100
                    transition-opacity duration-300"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
              </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/ZakariyaArale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
