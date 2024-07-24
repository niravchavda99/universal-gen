import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { generateData, TransformInput } from "@/lib/utils/generateData";
import { Algorithm } from "@/lib/models/algorithm.model";
import { useToast } from "@/components/ui/use-toast";
import { PopoverInput } from "@/components/popover-input/popover-input";
import "./generator-card.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GeneratorCardProps {
  algorithm: Algorithm;
}

export const GeneratorCard = ({ algorithm }: GeneratorCardProps) => {
  const [result, setResult] = useState<string>("");
  const { toast } = useToast();
  const resetFields = () => setResult("");
  const generateRandom = async () => {
    resetFields();
    const bytes = window.crypto.getRandomValues(new Uint8Array(20));
    await generateAndCopy(bytes);
  };
  const copyResultToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast({
      title: "Copied to clipboard!",
      variant: "default",
    });
  };
  const generateAndCopy = async (input: TransformInput) => {
    try {
      const result = await generateData(algorithm.type, input);
      setResult(result);
      await copyResultToClipboard(result);
    } catch (err: any) {
      toast({
        title: (err as Error).message,
        variant: "destructive",
      });
    }
  };
  const generateFromInput = async (inputText: string) => {
    resetFields();
    if (!inputText?.length) {
      toast({
        title: "Enter text to generate!",
        variant: "destructive",
      });
      return;
    }
    await generateAndCopy(inputText);
  };

  return (
    <Card className="w-[400px] generator-card">
      <CardHeader>
        <CardTitle className="generator-card-title">
          {algorithm.title}
        </CardTitle>
        <CardDescription className="generator-card-description">
          Generate {algorithm.displayName}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-center justify-center gap-2">
        <Button variant="default" size="sm" onClick={generateRandom}>
          {algorithm?.generateRandomActionName ?? "Random"}
        </Button>
        {!algorithm.isInputDisabled && (
          <PopoverInput onGenerate={generateFromInput} />
        )}
      </CardContent>
      <CardFooter className="h-[100px]">
        <div className="result-container w-full">
          {result && (
            <div className="result-header">
              <span>Result</span>
              <IoCopyOutline
                className="cursor-pointer w-4 h-4"
                onClick={() => copyResultToClipboard(result)}
              />
            </div>
          )}
          {result && <div className="break-all text-left">{result}</div>}
          {!result && (
            <div className="result-info">Your result will appear here</div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
