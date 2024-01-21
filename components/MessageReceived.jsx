import { Label } from "@/components/ui/label";

export default function MessageReceived({ message }) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label>Pesan yang diterima</Label>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}