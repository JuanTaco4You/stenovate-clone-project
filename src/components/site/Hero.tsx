import heroImg from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-hero">
        <div className="container grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
          <div className="text-left text-primary-foreground md:pr-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold mb-4">
              Organize. Collaborate. <br /> Grow your business.
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-prose">
              The only transcript management software that makes it easy for court reporters, scopists, and proofreaders to work together and produce more pages — all in one place.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="hero" size="xl">Get Started Free</Button>
              <a href="#schedule" className="text-accent font-medium underline-offset-4 hover:underline">
                Schedule time
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Transcript dashboard mockup" className="rounded-lg shadow-elegant w-full md:translate-y-2" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};
