import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { cva } from "class-variance-authority"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const containerVariants = cva("container mx-auto px-4 sm:px-6 lg:px-8", {
  variants: {
    variant: {
      full: "max-w-full",
      "2xl": "max-w-screen-2xl",
       xl: "max-w-screen-xl",
       lg: "max-w-screen-lg",
       md: "max-w-screen-md",
    },
  },
  defaultVariants: {
    variant: "xl",
  },
})
