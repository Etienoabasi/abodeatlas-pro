import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Sign In | AbodeAtlas";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sign in to AbodeAtlas to browse and manage real estate listings.";

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Missing fields", description: "Please enter your email and password." });
      return;
    }
    setLoading(true);
    try {
      // TODO: Connect to Supabase auth.
      await new Promise((r) => setTimeout(r, 600));
      toast({ title: "Signed in", description: "Welcome back to AbodeAtlas!" });
      navigate("/");
    } catch (err) {
      toast({ title: "Sign in failed", description: "Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container px-4 py-12">
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Sign In</h1>
            <p className="text-muted-foreground mb-8">Access your account to manage listings and favorites.</p>

            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              Don’t have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">Sign Up</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
