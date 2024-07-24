import { nanoid } from "nanoid";
import md5 from "md5";
import sha1 from "sha1";
import { AlgorithmType } from "@/lib/models/algorithm.model";

export type TransformInput = string | Uint8Array;
type TransformerFunction = (text: TransformInput) => Promise<string>;
type AlgorithmFunctionMap = {
  [key in AlgorithmType]: TransformerFunction;
};

const algorithmFunctionMap: AlgorithmFunctionMap = {
  md5: withPromise(md5),
  sha1: withPromise(sha1),
  epoch: withPromise(Date.now),
  nanoid: withPromise(() => nanoid()),
};

function withPromise(transformer: Function): TransformerFunction {
  return (text: TransformInput) =>
    new Promise<string>((resolve, reject) => {
      try {
        const result = transformer(text);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
}

export function generateData(
  algorithm: AlgorithmType,
  text: TransformInput,
): Promise<string> {
  return algorithmFunctionMap[algorithm](text);
}
