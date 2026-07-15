import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "text";
};

const variantClassNames = {
  primary: "button-primary",
  secondary: "button-secondary",
  text: "button-text",
} as const;

export function Button({ className = "", type = "button", variant = "primary", ...props }: ButtonProps) {
  return <button className={`button ${variantClassNames[variant]} ${className}`.trim()} type={type} {...props} />;
}
