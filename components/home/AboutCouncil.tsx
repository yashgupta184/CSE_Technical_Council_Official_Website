import { Lightbulb, Code2, Rocket } from "lucide-react";

export function AboutCouncil() {
  const pillars = [
    {
      title: "Learn",
      description: "Master emerging technologies beyond the standard classroom curriculum.",
      icon: Lightbulb,
    },
    {
      title: "Build",
      description: "Transform ideas into meaningful, practical and scalable solutions.",
      icon: Code2,
    },
    {
      title: "Lead",
      description: "Cultivate leadership, collaboration, and research-driven methodologies.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">About the Council</h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
            The CSE Technical Council is the official technical innovation club of the Department of CSE and Allied Branches at JSS University, Noida. It helps students explore emerging technologies beyond the classroom, develop practical skills, and transform ideas into meaningful solutions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title} 
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100/70 border border-blue-200/60 text-blue-600 group-hover:scale-110 transition-transform">
                  <pillar.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-slate-900">
                  {pillar.title}
                </dt>
                <dd className="mt-3 flex flex-auto flex-col text-sm leading-relaxed text-slate-600">
                  <p className="flex-auto">{pillar.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 sm:mt-28">
          <div className="mx-auto max-w-3xl rounded-2xl bg-blue-50/60 border-l-4 border-blue-600 border-y border-r border-blue-100 p-8 shadow-sm">
            <blockquote className="text-lg sm:text-xl font-normal leading-relaxed text-slate-800 italic">
              <p>
                &ldquo;To foster a strong technical culture that encourages learning, innovation, leadership, and research, while building a community of skilled, industry-ready students.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
