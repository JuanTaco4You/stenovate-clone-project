import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function setMeta(title: string, description: string) {
  document.title = title;
  let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', description);
}

const Index = () => {
  useEffect(() => {
    setMeta('Stenovate Clone – Home', 'Home page for Stenovate Clone. Log in or sign up to get started.');
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Stenovate Clone</h1>
        <p className="text-xl text-muted-foreground mb-6">Log in or sign up to get started.</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/auth">Log in / Sign up</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
