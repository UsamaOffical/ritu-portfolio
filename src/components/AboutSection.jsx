import { Brush, Palette, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6">
            <h3 className="lg:text-2xl md:text-2xl text-xl font-semibold">
              Creative Graphics Designer & Visual Storyteller
            </h3>

            <p className="text-muted-foreground">
              Hi, I’m Ritu — a passionate graphics designer who loves crafting
              bold, clean, and impactful visuals. I specialize in designing
              thumbnails, logo designs, branding kits, social media posts, and
              print media artwork.
            </p>

            <p className="text-muted-foreground">
              My goal is to transform ideas into eye-catching visuals that
              connect with audiences and strengthen brand identities. Every
              project I create is a blend of creativity, strategy, and
              storytelling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-3 lg:p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-1 lg:p-3 rounded-full bg-primary/10">
                  <Palette className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-1">
                    Branding & Identity
                  </h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    I design brand identities that make businesses stand out,
                    including logos, typography, and cohesive visual systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-3 lg:p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-1 lg:p-3 rounded-full bg-primary/10">
                  <Brush className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-1">Social Media Design</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    Eye-catching thumbnails, post designs, reels covers, and
                    visually engaging layouts crafted for maximum reach.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-3 lg:p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-1 lg:p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-1">Print Media & Fashion</h4>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    From posters and flyers to fashion design concepts — I create
                    polished and professional print-ready artwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
