import { Dispatch, SetStateAction } from "react";

interface TextInputInterface {
  name: string;
  id: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export type { TextInputInterface };
