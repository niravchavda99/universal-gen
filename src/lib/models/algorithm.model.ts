export type AlgorithmType = "nanoid" | "md5" | "sha1" | "epoch";

export interface Algorithm {
  title: string;
  displayName: string;
  type: AlgorithmType;
  isInputDisabled?: boolean;
  generateRandomActionName?: string;
}

export const algorithms: Algorithm[] = [
  {
    title: "Epoch",
    displayName: "Unix Epoch time",
    type: "epoch",
    isInputDisabled: true,
    generateRandomActionName: "Generate",
  },
  {
    title: "Nano Id",
    displayName: "Nano Id",
    type: "nanoid",
    isInputDisabled: true,
  },
  {
    title: "MD5",
    displayName: "MD5 Hash",
    type: "md5",
  },
  {
    title: "SHA1",
    displayName: "SHA1 Hash",
    type: "sha1",
  },
];
