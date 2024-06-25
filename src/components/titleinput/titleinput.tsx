import { ChangeEvent } from "react";
import type { TitleInputProps } from "./models/interfaces";

export const TitleInput = ({ title, setTitle }: Readonly<TitleInputProps>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };
  
  return (
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    />
  )
};