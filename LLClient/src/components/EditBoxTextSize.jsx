import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTextStyleStore } from "@/lib/textStyleStore";

export function EditBoxTextSize() {
  const textSize = useTextStyleStore((state) => state.fontSize);
  const setValue = useTextStyleStore((state) => state.setFontSize);
  const decreaseTextSize = () => {
    setValue(textSize - 1);
  };

  const increaseTextSize = () => {
    setValue(textSize + 1);
  };

  return (
    <div className="flex flex-row">
      <Button
        onClick={decreaseTextSize}
        id="decreasetextsize"
        variant="outline"
        size="icon"
      >
        <ChevronLeft />
      </Button>
      <Badge className="border-none" variant="outline">
        {textSize}
      </Badge>
      <Button
        onClick={increaseTextSize}
        id="increasetextsize"
        variant="outline"
        size="icon"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
