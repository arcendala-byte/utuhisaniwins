import { cn } from "@/lib/utils";
import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

const fieldClass =
  "w-full rounded border border-border bg-white px-3 py-2.5 text-ink placeholder:text-muted/70 transition-colors duration-150 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function TextArea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClass, "min-h-[9rem] resize-y", className)}
      {...props}
    />
  );
}

export function FieldLabel({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("type-label mb-2 block text-muted", className)}
    >
      {children}
    </label>
  );
}
