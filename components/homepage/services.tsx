import React from "react";
import { ArrowUpRight, BookOpen, Database, Code } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    name: "Learn",
    description: "Complete frontend development course from basics to advanced",
    features: ["HTML & CSS", "JavaScript", "React & GitHub"],
    url: "https://learn.nikode.ir",
    domain: "learn.nikode.ir",
    icon: BookOpen,
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "API",
    description: "Free fake API service for testing and development",
    features: ["JSON responses", "API KEY", "Error handling", "Query params"],
    url: "https://api.nikode.ir",
    domain: "api.nikode.ir",
    icon: Database,
    iconBg: "bg-green-50 dark:bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    name: "Components",
    description: "Beautiful shadcn/ui components ready to copy and paste",
    features: ["TypeScript ready", "Customizable", "Shadcn/ui"],
    url: "https://code.nikode.ir",
    domain: "code.nikode.ir",
    icon: Code,
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export default function Services() {
  return (
    <div className="mb-16">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              role="button"
              key={service.name}
              to={service.url}
              className="group relative flex flex-col items-start gap-4 rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 transition-all hover:shadow-md hover:ring-gray-300 dark:hover:ring-gray-600"
            >
              <div className="flex items-center justify-between w-full">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
              </div>

              <div className="w-full">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 block">
                  {service.domain}
                </span>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
