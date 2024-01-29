import * as React from "react";

import { Eye, EyeOff } from "lucide-react";
import { InputWithValidation } from "../InputWithValidation/InputWithValidation";
import { Button } from "../shadcn/ui/button";
import { InputProps } from "../shadcn/ui/input";

export interface InputPasswordProps extends Omit<InputProps, "type"> {
  invalidMessage?: string;
  idShowPassword: string;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ isInvalid, invalidMessage, idShowPassword, className, ...props }, ref) => {
    const [isShown, setIsShown] = React.useState<boolean>(false);
    function handleToggleShow() {
      setIsShown((prev) => !prev);
    }
    return (
      <div className="flex w-full">
        <InputWithValidation
          ref={ref}
          type={isShown ? "text" : "password"}
          className={className + "grow"}
          {...props}
          isInvalid={isInvalid}
          invalidMessage={invalidMessage}
        />
        <Button onClick={handleToggleShow} variant={"ghost"} type="button" size={"icon"}>
          {isShown ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
    );
  },
);

InputPassword.displayName = "InputWithValidation";

export { InputPassword };
