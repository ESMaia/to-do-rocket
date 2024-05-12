import { DefaultButton } from "./default-button/default-button";
import { IconButton } from "./icon-button/icon-button";

interface ButtonProps {
  type: "default" | "icon";
  label?: string;
  onClick: () => void;
  className?: string;
}
export function Button({
  type = "default",
  label,
  onClick,
  className,
}: ButtonProps) {
  if (type == "icon") {
    return <IconButton onClick={onClick} className={className} />;
  }
  return (
    <DefaultButton label={label} onClick={onClick} className={className} />
  );
}
