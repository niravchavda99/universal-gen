import "./TextArea.css";
import { FormEvent } from "react";

interface TextAreaProps {
  value?: string;
  rows?: number;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const TextArea = ({
  value,
  rows,
  placeholder,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      value={value}
      className="textarea"
      rows={rows ?? 4}
      placeholder={placeholder}
      onChange={(e: FormEvent) =>
        onChange((e.target as HTMLTextAreaElement).value)
      }
    ></textarea>
  );
};
