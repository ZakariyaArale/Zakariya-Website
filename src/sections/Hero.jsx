import { Button } from "@/button/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../button/AnimatedBorderButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}backdrop.png`}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#9B30FF",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
              Hello I'm Zakariya{" "}
              <span className="text-primary glow-text">Arale</span>
            </h1>
            <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a third year Computer Science (Software Engineering) student at the
                University of Toronto Scarborough and an Android Engineering Intern at
                Wattpad, passionate about building impactful, reliable, and accessible
                software.
              </p>
              <p>
                At Wattpad, I’m improving how the app works with assistive technology like
                TalkBack. See one of those fixes and what I learned from it in my{" "}
                <a
                  href="#artifact"
                  className="font-medium text-primary hover:underline"
                >
                  featured artifact
                </a>
                .
              </p>
              <p>
                Before Wattpad, I contributed to team and independent software projects, including SmartAir, an
                app that helps parents manage their child’s health data, and an
                asynchronous Battleship gaming server. Beyond coding, I’ve been active in
                extracurriculars and community initiatives across Toronto, and I’m a TA at
                UofT, where I enjoy helping others with course material.
              </p>
              <p>
                Looking ahead, I’m continuing to grow as an mobile engineer, building and maintaining apps
                that are accessible and reliable for everyone.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-300">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-[#9B30FF] text-white hover:bg-[#b04bff] shadow-[0_0_8px_#9B30FF,0_0_16px_#9B30FF]"
              >
                Contact Me
              </Button>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Arale,Zakariya_Resume.pdf`}
              download
            >
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download Resume
              </AnimatedBorderButton>
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {[
              { icon: Github, href: "https://github.com/ZakariyaArale" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/zakariya-arale/" },
            ].map((social, idx) => (
              <a
                key={idx}
                target="_blank"
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group translate-y-8"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
