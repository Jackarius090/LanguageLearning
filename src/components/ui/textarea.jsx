import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, setHighlightedText, ...props }, ref) => {
  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    setHighlightedText(selectedText);  // Update the parent with highlighted text
  };

  return (
    <textarea
      onMouseUp={handleMouseUp}
      placeholder="Insert text here:"
      className={cn(
        "size-full min-h-max rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
