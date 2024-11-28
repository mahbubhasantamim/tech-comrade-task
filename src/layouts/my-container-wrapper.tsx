import { ReactNode } from "react";

function MyContainerWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto min-h-[calc(100vh-200px)] ${className}`}>
      {children}
    </div>
  );
}

export default MyContainerWrapper;
