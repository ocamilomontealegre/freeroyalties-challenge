import { DataType } from "./models/enums"
import type { ChoiceInputProps } from "./models/interfaces"

export const ChoiceInput = ({ index, choice, handleChoiceChange }: Readonly<ChoiceInputProps>) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Choice Text"
        value={choice.text ?? ""}
        onChange={(event) => handleChoiceChange(index, 'text', event.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <select
        value={choice.type ?? ""}
        onChange={(event) => handleChoiceChange(index, 'type', event.target.value)}
        className="border p-2 w-full"
      >
        <option value="">Select Type</option>
        <option value="dollar">{DataType.DOLLAR}</option>
        <option value="number">{DataType.NUMBER}</option>
        <option value="string">{DataType.STRING}</option>
        <option value="boolean">{DataType.BOOLEAN}</option>
      </select>
    </div>
  )
}