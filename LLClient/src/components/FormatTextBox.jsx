import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EditBoxTextSize } from "@/components/EditBoxTextSize";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTextStyleStore } from "@/lib/textStyleStore";

export function FormatTextBox() {
  const textColor = useTextStyleStore((state) => state.color);
  const setTextColor = useTextStyleStore((state) => state.setTextColor);
  const fontFamily = useTextStyleStore((state) => state.fontFamily);
  const setFontFamily = useTextStyleStore((state) => state.setFontFamily);

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
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Line spacing</Label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
