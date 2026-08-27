import Image from "next/image";
import GilmarLogo from "@/../public/logo.png";

export function Logo() {
  return <Image src={GilmarLogo} alt="Gilmar Logo" />;
}
