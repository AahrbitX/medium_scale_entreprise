import Link from "next/link";
import type { FC } from "react";

interface LogoProps {
  logoText?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ logoText = "YourLogo", className }) => {
  return (
    <Link href="/" className={`text-2xl font-bold ${className}`}>
      {logoText}
    </Link>
  );
};

export default Logo;
