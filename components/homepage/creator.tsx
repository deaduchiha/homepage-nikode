import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export default function Creator() {
  return (
    <div className="text-center">
      <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
        <div className="mx-auto max-w-md">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Created by
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Alireza Nikzad
          </h3>

          <Button
            variant="outline"
            asChild
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Link
              to="https://alireza-nikzad.ir"
              className="flex items-center gap-2"
            >
              View Portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
