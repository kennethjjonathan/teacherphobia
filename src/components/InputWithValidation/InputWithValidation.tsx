import * as React from "react";

import { Input, InputProps } from "../shadcn/ui/input";

export interface InputWithValidationProps
  extends InputProps {
    invalidMessage?: string;
  }

const InputWithValidation = React.forwardRef<HTMLInputElement, InputWithValidationProps>((
    {isInvalid, invalidMessage, className, type, ...props }, ref
) => {
    return (
        <div className="w-full space-y-1">
            <Input ref={ref} type={type} className={className} {...props} isInvalid={isInvalid}/>
            {isInvalid && <p className="text-destructive w-full max-w-full text-left text-xs lg:text-sm">{invalidMessage}</p>}
        </div>
    )
})

InputWithValidation.displayName = "InputWithValidation"

export { InputWithValidation };
