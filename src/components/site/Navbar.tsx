import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground";

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-hero shadow-elegant grid place-items-center text-primary-foreground font-bold">S</span>
          <span className="font-semibold">Stenovate</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="#pricing" className={navCls}>Pricing</NavLink>
          <NavLink to="#members" className={navCls}>Our Members</NavLink>
          <NavLink to="#resources" className={navCls}>Resources</NavLink>
          <NavLink to="#signin" className={navCls}>Sign In</NavLink>
          <Button variant="hero" size="sm">Start Free Trial</Button>
        </div>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-3">
            <a href="#pricing" className="text-foreground/80">Pricing</a>
            <a href="#members" className="text-foreground/80">Our Members</a>
            <a href="#resources" className="text-foreground/80">Resources</a>
            <a href="#signin" className="text-foreground/80">Sign In</a>
            <Button variant="hero" size="sm" className="w-full">Start Free Trial</Button>
          </div>
        </div>
      )}
    </header>
  );
};
