import { useState } from "react";
import { Play, Smartphone } from "lucide-react";

const artifact = {
    title: "Making Wattpad's Android App Work with TalkBack",
    meta: "Android Engineering Intern · Wattpad · Sep 2026 – Aug 2027 · Last updated Nov 2026",
    videos: [
        {
            id: "before",
            label: "Before",
            caption: 'Before: TalkBack reads the password screen\'s back button as "unlabeled."',
            src: `${import.meta.env.BASE_URL}video/Accessbility(Before).mp4`,
        },
        {
            id: "after",
            label: "After",
            caption: 'After: the same button is announced as "Back."',
            src: `${import.meta.env.BASE_URL}video/Accessbility(After).mp4`,
        },
    ],
    description: [
        "As an Android engineering intern at Wattpad, I helped make the app work better with assistive technology. My manager audited the app and logged accessibility issues as Jira tickets, and I volunteered to take on about 10 of them, finishing them in roughly two weeks alongside other priority projects (stay tune). Across four screens (login, home, filter stories list, report user/story forms), some UI elements lacked content descriptions, so assistive technologies like TalkBack announced nothing useful. In the video, the create password screen's back button is read as “unlabeled” before my fix and “Back” after. The fix was one line, pulling a string resource into the content description of the back button.",
        "The hard part of complete those tickets was the codebase. I had learned Jetpack Compose/Kotlin only 3 weeks earlier, and Wattpad's codebase was far larger than my previous android project SmartAir, which made it difficult to locate the UI elements that need content description. To locate UI elements quickly, I traced each user path to its screen (following the login screen's buttons to the file that implements the create password screen instead of blindly searching file names), used an AI tool to locate the element in that screen's file, and verified every fix on a physical tablet with TalkBack. A senior engineer approved the changes and they shipped in version 11.42.",
        "This work showed me that a one-line change can decide whether someone can use an app at all. I also learned to use AI to navigate large codebases and grew more confident with Jetpack Compose. Finally, I learned to reproduce each bug with TalkBack before fixing it, since a few issues were already resolved and searching first cost me time. I want to carry these habits forward as an Android engineer, maintaining apps that are accessible for everyone.",
    ],
    skills: [
        "Kotlin",
        "Jetpack Compose",
        "Android Studio",
    ],
};

export const Artifact = () => {
    const [activeId, setActiveId] = useState("before");
    const activeVideo = artifact.videos.find((v) => v.id === activeId);

    return (
        <section id="artifact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Featured
                        <span className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground glow-text">
                            {" "}
                            Artifact
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        These are showcases of my work experience as a software engineer
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Artifact card */}
                    <div className="glass rounded-3xl overflow-hidden glow-border animate-fade-in animation-delay-200">
                        {/* Tabs */}
                        <div
                            role="tablist"
                            aria-label="Before and after recordings"
                            className="flex gap-2 p-4 border-b border-border/50"
                        >
                            {artifact.videos.map((video) => (
                                <button
                                    key={video.id}
                                    role="tab"
                                    aria-selected={video.id === activeId}
                                    onClick={() => setActiveId(video.id)}
                                    className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${video.id === activeId
                                        ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(155,48,255,0.45)]"
                                        : "bg-surface text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary"
                                        }`}
                                >
                                    {video.label}
                                </button>
                            ))}
                        </div>

                        {/* Video (key forces a fresh player, and stops the old one, when the tab changes) */}
                        <div className="bg-black/40 flex justify-center">
                            <video
                                key={activeVideo.id}
                                controls
                                playsInline
                                preload="metadata"
                                aria-label={activeVideo.caption}
                                className="w-full max-h-[70vh] object-contain"
                            >
                                <source src={activeVideo.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <p className="flex items-center justify-center gap-2 px-6 py-3 text-xs text-muted-foreground border-b border-border/50">
                            <Play className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {activeVideo.caption}
                        </p>

                        {/* Description */}
                        <div className="p-6 md:p-10 space-y-5">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">{artifact.title}</h3>
                                <p className="flex items-center gap-2 text-sm text-primary">
                                    <Smartphone className="w-4 h-4 flex-shrink-0" />
                                    {artifact.meta}
                                </p>
                            </div>

                            {artifact.description.map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className="text-muted-foreground text-sm md:text-base leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}

                            <div className="pt-2">
                                <h4 className="text-sm font-semibold mb-3">
                                    Skills <span className="text-primary glow-text">Used</span>
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {artifact.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_12px_rgba(155,48,255,0.35)] transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};