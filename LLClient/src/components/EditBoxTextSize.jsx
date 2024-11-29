import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTextSizeStore } from "@/lib/textSizeStore";

export function EditBoxTextSize() {
  const textSize = useTextSizeStore((state) => state.value);
  const setValue = useTextSizeStore((state) => state.setValue);
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
