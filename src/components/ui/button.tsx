import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[5px] text-sm font-medium transition-all overflow-hidden no-underline decoration-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-[70%] before:bg-current before:transition-[width] before:duration-300 before:ease-out before:rounded-bl-[5px] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:w-[2px] after:h-[70%] after:bg-current after:transition-[height] after:duration-300 after:ease-out after:rounded-bl-[5px] hover:before:w-full hover:after:h-full focus-visible:before:w-full focus-visible:after:h-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        plain:
          "bg-transparent text-[color:var(--fg)] shadow-none hover:bg-transparent hover:text-[color:var(--fg)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        hero: "h-auto px-5 py-3 gap-2 text-xl font-normal leading-none",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  leadingGlyph = false,
  glyphClassName,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    leadingGlyph?: boolean
    glyphClassName?: string
  }) {
  const Comp = asChild ? Slot : "button"

  let renderedChildren = children

  if (leadingGlyph) {
    const childContent = React.isValidElement(children)
      ? (children.props as { children?: React.ReactNode }).children
      : children

    const glyphContent = (
      <span className="inline-flex items-end gap-[2px] leading-none">
        <BracketGlyph
          className={cn(
            "h-[70px] w-[70px] -translate-y-[6px] text-[#999999]",
            glyphClassName
          )}
          aria-hidden
        />
        <span className="leading-none">{childContent}</span>
      </span>
    )

    if (asChild && React.isValidElement(children)) {
      const childElement = children as React.ReactElement
      renderedChildren = React.cloneElement(childElement, undefined, glyphContent)
    } else {
      renderedChildren = glyphContent
    }
  }

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        leadingGlyph && "gap-[2px] bg-transparent px-3 py-2 shadow-none"
      )}
      {...props}
    >
      {renderedChildren}
    </Comp>
  )
}

function BracketGlyph(
  props: React.SVGProps<SVGSVGElement> & { className?: string }
) {
  const { className, ...rest } = props

  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M6.40616 24.903V7.70308C6.40616 7.31478 6.09138 7 5.70308 7C5.31478 7 5 7.31478 5 7.70308V24.903C5 28.8226 8.17724 32 12.097 32H29.2969C29.6852 32 30 31.6852 30 31.2969C30 30.9086 29.6852 30.5938 29.2969 30.5938H12.097C8.95425 30.5938 6.40616 28.0459 6.40616 24.903Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { Button, buttonVariants }
