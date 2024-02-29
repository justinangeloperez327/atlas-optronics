import React from "react";

interface Props {
  id?: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input = ({
  id,
  label,
  name,
  type = "text",
  placeholder = "Placeholder",
}: Props) => {
  return (
    <div className="my-3">
      <label htmlFor={id} className="block pl-2 text-lg text-gray-900">
        {label}
      </label>
      <div className="relative mt-1.5 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-xl text-lg border-0 px-3 pb-2 pt-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
