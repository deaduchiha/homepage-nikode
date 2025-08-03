import type { Route } from "./+types/home";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { BookOpen, Database, Code2, ArrowUpRight } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "nikode" },
    { name: "description", content: "learn with nikode" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="max-h-dvh min-h-dvh h-full w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="bg-[#e5e5e5] h-full flex items-center justify-center p-8">
          <div className="max-w-md space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl text-[#1a1a1a] md:text-5xl font-bold  leading-tight">
                Welcome to <span className="text-green-900">Nikode</span>
              </h1>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Great work can be done with a continuity of small steps
              </p>
            </div>

            <div className="grid gap-4">
              {SECTIONS.map((section) => (
                <Button variant="service" asChild key={section.label}>
                  <Link
                    target="_blank"
                    to={section.href}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center gap-3">
                      <section.icon className="w-5 h-5" />
                      <span>{section.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              ))}
            </div>

            <div className="text-zinc-700">
              click on the buttons to explore our services^^
            </div>
          </div>
        </div>

        <div className="relative h-full overflow-hidden md:block hidden ">
          <img
            src="/background.jpg"
            alt="hero"
            className="w-full h-full object-cover object-top-left"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

const SECTIONS = [
  {
    label: "Complete frontend development course",
    href: "https://learn.nikode.ir",
    icon: BookOpen,
  },
  {
    label: "Free API service for testing",
    href: "https://api.nikode.ir",
    icon: Database,
  },
  {
    label: "Shadcn UI components library",
    href: "https://code.nikode.ir",
    icon: Code2,
  },
];
