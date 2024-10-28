import { TextInputInterface } from "../interfaces/components";

export function TextInput({ name, id, value, setValue }:TextInputInterface) {
  return (
    <input
      type="text"
      name={name}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
