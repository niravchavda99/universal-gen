import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/textarea/TextArea";
import { useState } from "react";
import { Pencil } from "lucide-react";

interface PopoverInputProps {
  onGenerate: (inputText: string) => void;
}

export const PopoverInput = ({ onGenerate }: PopoverInputProps) => {
  const [inputText, setInputText] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const generateAndClose = () => {
    onGenerate(inputText);
    setIsOpen(false);
  };
  return (
    <Popover open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
      <PopoverTrigger asChild>
        <Button variant="default" size="sm" className="flex gap-1">
          <Pencil size={12} />
          <span>Input</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-input-container">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Input Text</h4>
          </div>
          <TextArea
            value={inputText}
            placeholder="Enter text"
            onChange={setInputText}
          />
          <div className="flex flex-row gap-2 w-full">
            <Button
              variant="default"
              size="sm"
              onClick={generateAndClose}
              className="w-full"
            >
              Generate
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setInputText("")}
              className="w-full"
            >
              Clear
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
