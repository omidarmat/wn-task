import Image from "next/image";
import GilmarLogo from "@/../public/logo.png";

interface PropTypes {
  classes?: string;
}

export function Logo({ classes = "" }: PropTypes) {
  return <Image className={classes} src={GilmarLogo} alt="Gilmar Logo" />;
}
