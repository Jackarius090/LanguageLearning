import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EditBoxTextSize } from "@/components/EditBoxTextSize";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTextStyleStore } from "@/lib/textStyleStore";
import {
  AlignJustify,
  AlignCenter,
  AlignLeft,
  AlignRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function FormatTextBox() {
  const textColor = useTextStyleStore((state) => state.color);
  const setTextColor = useTextStyleStore((state) => state.setTextColor);
  const fontFamily = useTextStyleStore((state) => state.fontFamily);
  const setFontFamily = useTextStyleStore((state) => state.setFontFamily);
  const setTextAlignment = useTextStyleStore((state) => state.setTextAlignment);
  const setLineHeight = useTextStyleStore((state) => state.setLineHeight);
  const lineHeight = useTextStyleStore((state) => state.lineHeight);

  const textAlignment = (alignment) => () => {
    setTextAlignment(alignment);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="m-3 w-1/5 mx-4" variant="outline">
          Format Text
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" side="top">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="textsize">Text size </Label>
              <EditBoxTextSize id="textsize" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="textcolor">Text color</Label>
              <Select
                id="textcolor"
                value={textColor}
                onValueChange={setTextColor}
              >
                <SelectTrigger className="col-span-2">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Default</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="font">Font</Label>
              <Select
                id="font"
                value={fontFamily}
                onValueChange={setFontFamily}
              >
                <SelectTrigger className="col-span-2">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Arial">Arial</SelectItem>
                  <SelectItem value="Times New Roman">
                    Times New Roman
                  </SelectItem>
                  <SelectItem value="Courier New">Courier New</SelectItem>
                  <SelectItem value="Impact">Impact</SelectItem>
                  <SelectItem value="Calibri">Calibri</SelectItem>
                  <SelectItem value="Georgia">Georgia</SelectItem>
                  <SelectItem value="Cambria">Cambria</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex row items-center gap-2">
              <Label htmlFor="alignment">Text Alignment</Label>
              <Button
                onClick={textAlignment("justify")}
                id="alignment"
                variant="outline"
                size="icon"
              >
                <AlignJustify />
              </Button>
              <Button
                onClick={textAlignment("center")}
                id="alignment"
                variant="outline"
                size="icon"
              >
                <AlignCenter />
              </Button>
              <Button
                onClick={textAlignment("start")}
                id="alignment"
                variant="outline"
                size="icon"
              >
                <AlignLeft />
              </Button>
              <Button
                onClick={textAlignment("end")}
                id="alignment"
                variant="outline"
                size="icon"
              >
                <AlignRight />
              </Button>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="lineSpacing">Line height</Label>
              <div className="flex flex-row">
                <Button
                  onClick={() => setLineHeight(lineHeight - 0.1)}
                  id="decreasetextsize"
                  variant="outline"
                  size="icon"
                >
                  <ChevronLeft />
                </Button>
                <Badge className="border-none" variant="outline">
                  {lineHeight.toFixed(1)}
                </Badge>
                <Button
                  onClick={() => setLineHeight(lineHeight + 0.1)}
                  id="increasetextsize"
                  variant="outline"
                  size="icon"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
