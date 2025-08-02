import Hero from "@/components/homepage/hero";
import Services from "@/components/homepage/services";
import type { Route } from "./+types/home";
import Creator from "@/components/homepage/creator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Hero />
        <Services />
        <Creator />
      </main>
    </div>
  );
}
