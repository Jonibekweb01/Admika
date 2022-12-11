import { StyledInput } from "./input.styles"
import { forwardRef } from "react"

export const Input = forwardRef((props, ref) => {
  return (
    <>
      <StyledInput ref={ref} {...props} />
    </>
  )
})
