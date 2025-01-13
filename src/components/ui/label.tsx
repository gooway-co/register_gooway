import React from "react";
import PropTypes from 'prop-types';

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {children}
    </label>
  );
}

// PropTypes (Opcional si deseas mantener la validación en tiempo de ejecución)
Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
