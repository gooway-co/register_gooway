import React from 'react';
import PropTypes from 'prop-types';

interface InputProps {
  id: string;
  name: string;
  value?: string;
  type?: string;
  accept?: string;
  multiple?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export function Input({ id, name, value, type, accept, multiple, onChange, required, className }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      accept={accept}
      multiple={multiple}
      onChange={onChange}
      required={required}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  );
}

// PropTypes (Opcional si estás trabajando con TypeScript)
Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
};
