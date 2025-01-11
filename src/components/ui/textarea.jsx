import * as React from "react";
import { cn } from "../../lib/utils";


const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg bg-background-50 px-3 py-2 text-base ring-offset-background-50 placeholder:text-foreground-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-250 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

