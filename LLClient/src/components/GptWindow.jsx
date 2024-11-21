import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function GptWindow() {
  const { toast } = useToast();

  return (
    <div className="py-4">
      <Button
        onClick={() => {
          toast({
            title: "Not working yet!",
            description: "Coming soon!",
          });
        }}
        className="m-3 w-4/5"
        variant="outline"
      >
        Chat Gipity It!
      </Button>
    </div>
  );
}
