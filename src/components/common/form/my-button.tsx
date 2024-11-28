import React, { ReactNode } from "react";
import { Button, ButtonProps } from "../../ui/button";

interface IMyButton extends ButtonProps {
  title: string;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick: () => void | Promise<void>;
}

const MyButton = React.forwardRef<HTMLButtonElement, IMyButton>(
  (
    {
      onClick,
      title,
      loading = false,
      variant,
      className,
      size,
      asChild,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        asChild={asChild}
        size={size}
        className={className}
        onClick={() => {
          void onClick();
        }}
        variant={variant}
        {...props}
      >
        {loading ? (
          "loading..."
        ) : (
          <>
            {startIcon && <>{startIcon}</>}
            {title}
            {endIcon && <>{endIcon}</>}
          </>
        )}
      </Button>
    );
  }
);
MyButton.displayName = "MyButton";

export default MyButton;
