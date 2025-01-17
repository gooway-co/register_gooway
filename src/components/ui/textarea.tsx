import React from "react";

interface TextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  minLength?: number; // Longitud mínima opcional
}

export function Textarea({
  id,
  name,
  value,
  onChange,
  required = false,
  className = "",
  minLength,
  maxLength,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      minLength={minLength} // Aplicar la longitud mínima si se proporciona
    ></textarea>
  );
}
