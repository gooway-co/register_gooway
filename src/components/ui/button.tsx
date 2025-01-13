import React from "react";
import PropTypes from 'prop-types';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Button({ type = "button", onClick, children, className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-slate-950 text-white font-medium rounded-md shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
}

// PropTypes (Opcional si deseas mantener la validación en tiempo de ejecución)
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
