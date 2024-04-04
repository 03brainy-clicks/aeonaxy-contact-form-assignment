import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";

type DropddownFieldProps = {
  list: ValueType[];
  placeholder: string;
  value: ValueType;
  setValue: Dispatch<SetStateAction<ValueType>>;
};

type ValueType = {
  value: string;
  title: string;
};

const DropddownField = ({
  list,
  placeholder,
  setValue,
  value,
}: DropddownFieldProps) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <div
          className="border text-sm rounded-sm w-full placeholder:text-xs border-gray-400 flex flex-col gap-1 px-2 cursor-pointer py-1"
          onClick={handleToggle}
        >
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xs text-gray-400">
                {placeholder}
              </label>
              <span className="text-xs">{value?.title}</span>
            </div>
            <div>
              {!toggle ? (
                <ChevronDownIcon className="w-4" />
              ) : (
                <ChevronUpIcon className="w-4" />
              )}
            </div>
          </div>
        </div>
        {toggle && (
          <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-sm shadow-md max-h-40 overflow-y-auto z-10">
            {list.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setValue(option);
                  setToggle(false);
                }}
                className="cursor-pointer px-1 py-1 hover:bg-gray-100 text-xs"
              >
                {option.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropddownField;
