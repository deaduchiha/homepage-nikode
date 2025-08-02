import React from "react";

import { Circle, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center justify-center w-12 h-12  dark:bg-gray-800 rounded-xl   border-gray-200 dark:border-gray-700 mr-4">
          <Circle className="h-6 w-6 text-gray-700 dark:text-gray-300 stroke-3" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white ">
          Nikode
        </h1>
      </div>

      <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
        Learn programming from zero to hero
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-500 font-medium">
        nikode.ir
      </p>
    </div>
  );
}
