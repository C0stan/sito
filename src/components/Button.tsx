import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      /**
       * The twMerge function ensures these classes are combined intelligently, resolving any potential conflicts by keeping the most specific or last-defined class.
       */
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}

/**
 * <button 
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)} 
    />
 */

/**
 * <button 
      {...props}
      className={twMerge(className, buttonStyles({ variant, size }))} 
    />
 */
