import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Transcript Management Platform',
    url: '/',
    sameAs: [] as string[],
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section className="container py-16 md:py-20" id="cta">
          <div className="rounded-xl bg-secondary p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Track the details. Grow faster.</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Organize work, collaborate with your transcript team, and deliver more pages with less stress.</p>
            <a href="#get-started" className="inline-flex">
              <span className="sr-only">Get Started</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
    </>
  );
};

export default Index;
