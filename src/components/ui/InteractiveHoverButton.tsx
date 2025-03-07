import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full border-4 border-white bg-[#04B851] p-3 px-6 hover:px-8 text-center font-semibold text-white transition-all duration-500",
          "hover:bg-black hover:border-white",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Static text that doesn't move */}
          <span className="">
            {children}
          </span>
          
          {/* Container for the dot and arrow */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* White dot that disappears on hover */}
            <div className="absolute h-2 w-2 rounded-full bg-white transition-all duration-500 group-hover:opacity-0 group-hover:scale-0"></div>
            
            {/* Arrow that appears on hover */}
            <ArrowRight className="absolute text-4xl  scale-0 translate-x-4 group-hover:translate-x-0 transition-all duration-500  group-hover:scale-100" />
          </div>
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";