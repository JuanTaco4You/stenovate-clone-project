import { FolderUp, MessageSquare, DollarSign } from "lucide-react";

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <article className="text-center p-6 rounded-lg bg-card border shadow-sm animate-enter">
    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-secondary grid place-items-center">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm max-w-xs mx-auto">{desc}</p>
  </article>
);

export const Features = () => {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/40" id="features">
      <div className="container py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature
            icon={FolderUp}
            title="Organize"
            desc="Add transcript details and deadlines, manage your page backlog, and track progress for solo work or teams."
          />
          <Feature
            icon={MessageSquare}
            title="Collaborate"
            desc="Find professional scopists and proofreaders, share large files, update progress, and communicate efficiently."
          />
          <Feature
            icon={DollarSign}
            title="Make More Money"
            desc="Save time and make up to 30% more when you organize and collaborate in one place."
          />
        </div>
      </div>
    </section>
  );
};
