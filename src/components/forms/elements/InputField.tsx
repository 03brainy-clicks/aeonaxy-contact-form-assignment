import { Dispatch, SetStateAction } from "react";

type InputFieldProps = {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
};

const InputField = ({
  placeholder,
  value,
  setValue,
  type = "text",
}: InputFieldProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border text-sm py-2 px-2 rounded-sm w-full placeholder:text-xs border-gray-400"
      placeholder={placeholder}
      required
    />
  );
};

export default InputField;
