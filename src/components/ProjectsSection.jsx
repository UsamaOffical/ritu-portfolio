import { ArrowRight, ExternalLink } from "lucide-react";
import { BsBehance } from "react-icons/bs";

const projects = [
  {
    id: 1,
    title: "Socail Media Post",
    description: "Design all type of graphics for social media marketing.",
    image: "/projects/project-1.jpg",
    tags: ["Photoshop", "Adobe Illustrator"],
    demoUrl: "https://hackathon-e-commerce-4eep.vercel.app/",
    githubUrl: "https://github.com/UsamaOffical/Hackathon-E-commerce",
  },
  {
    id: 2,
    title: "Nescafe Product design",
    description:
      "Socail media posts design for different brands and companies.",
    image: "/projects/project-2.jpg",
    tags: ["Photoshop", "Adobe Illustrator"],
    demoUrl: "https://cara-by-usama.vercel.app/",
    githubUrl: "https://github.com/UsamaOffical/HTML-CSS-projects/tree/main/cara",
  },
  {
    id: 3,
    title: "Food Flyer design",
    description:
      "Design flyer for all type of categories using Photoshop and Illustrator.",
    image: "/projects/project-4.jpg",
    tags: ["Photoshop", "Adobe Illustrator"],
    demoUrl: "https://travel-agency-usama.vercel.app/",
    githubUrl: "https://github.com/UsamaOffical/HTML-CSS-projects/tree/main/travel",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Design </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base lg:text-lg md:text-lg">
          Here are some of my recent graphic design projects that showcase my
          skills and creativity. Each project reflects my commitment to
          delivering visually appealing and effective designs that meet client
          objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <BsBehance size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.behance.net/Ritu44"
          >
            Check My Behance <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
