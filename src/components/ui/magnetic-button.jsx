import { motion } from "motion/react";
import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const DEFAULT_TRANSITION = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
}

export function MagneticButton({
  children,
  className,
  transition = DEFAULT_TRANSITION,
  onMouseMove,
  onMouseLeave,
  ...props
}) {
  const ref = React.useRef(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    onMouseMove?.(e)
    const node = ref.current
    if (!node) return
    const { clientX, clientY } = e
    const { height, width, left, top } = node.getBoundingClientRect()
    setPosition({
      x: clientX - (left + width / 2),
      y: clientY - (top + height / 2),
    })
  }

  const handleMouseLeave = (e) => {
    onMouseLeave?.(e)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Button
      render={
        <motion.button
          ref={ref}
          animate={{ x: position.x, y: position.y }}
          transition={transition}
          whileTap={{ scale: 0.95 }} />
      }
      nativeButton
      data-slot="magnetic-button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative transition-none active:translate-y-0", className)}
      {...props}>
      {children}
    </Button>
  );
}

export default MagneticButton
