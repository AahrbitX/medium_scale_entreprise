import type { FC } from "react";

interface LogoProps {
  logoText?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ logoText = "YourLogo", className }) => {
  return <div className={`text-2xl font-bold ${className}`}>{logoText}</div>;
};

export default Logo;
