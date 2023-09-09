import { useState } from "react";
import { SelectProps } from ".";

//todo
export const SelectComponent: React.FC<SelectProps> = ({
  id,
  options,
  defaultOption,
  onChange,
}) => {
  console.log(defaultOption)
  const [selectedValue, setSelectedValue] = useState(defaultOption);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      className="py-3 px-4 pr-9 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 cursor-pointer"
      id={id}
      defaultValue={selectedValue}
      onChange={handleSelectChange}
    >
      {options.map((e) => (
        <option
          key={e.key}
          value={e.value}
          className={e.value === selectedValue ? "text-red-500" : "cursor-pointer"}
        >
          {e.key}
        </option>
      ))}
    </select>
  );
};
