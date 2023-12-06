import Link from "next/link";

interface NavLinkProps {
  text: string;
}

export const NavLink = ({ text }: NavLinkProps) => {
  return (
    <Link href="/">
      <li className="px-6 py-3">{text}</li>
    </Link>
  );
};
