import { Typography } from "@/components/ui";
import { navbarItems } from "@/contents/navbar";

export function Navbar() {
  return (
    <ul className="flex items-center gap-[2.5vw]">
      {Object.values(navbarItems).map((item) => (
        <li key={item.id}>
          <Typography classes="text-nowrap">{item.label}</Typography>
        </li>
      ))}
    </ul>
  );
}
