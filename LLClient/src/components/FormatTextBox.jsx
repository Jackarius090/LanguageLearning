import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EditBoxTextSize } from "@/components/EditBoxTextSize";
export function FormatTextBox() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="m-3 w-1/5 mx-4" variant="outline">
          Format Text
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="textsize">Text size </Label>
              <EditBoxTextSize id="textsize" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Text color</Label>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Font</Label>
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
