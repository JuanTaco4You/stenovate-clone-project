import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/integrations/supabase/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

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

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setMeta('Dashboard - Stenovate Clone', 'Your account dashboard in Stenovate Clone.');
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({ title: 'Logout error', description: error.message });
      return;
    }
    toast({ title: 'Signed out', description: 'You have been logged out.' });
    navigate('/auth', { replace: true });
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <section className="mx-auto max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome{user?.email ? `, ${user.email}` : ''}.</p>
        </header>

        <div className="flex items-center gap-3">
          <Button onClick={handleLogout}>Sign out</Button>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
