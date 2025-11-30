import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "relative overflow-hidden file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "before:pointer-events-none before:absolute before:top-0 before:right-0 before:h-[2px] before:w-[65%] before:bg-[#999999] before:transition-[width] before:duration-300 before:ease-out before:rounded-tr-[5px] after:pointer-events-none after:absolute after:top-0 after:right-0 after:w-[2px] after:h-[65%] after:bg-[#999999] after:transition-[height] after:duration-300 after:ease-out after:rounded-tr-[5px] hover:before:w-full hover:after:h-full focus-visible:before:w-full focus-visible:after:h-full",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
