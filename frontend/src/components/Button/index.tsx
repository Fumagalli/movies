import React from "react";
import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}