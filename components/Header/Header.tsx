import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-2 lg:px-6 h-14 flex items-center">
      <Link href="#" passHref> {/* Added passHref prop */}
        <a className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} passHref> {/* Added passHref prop */}
      <a className="text-lg font-large hover:underline underline-offset-4">{children}</a>
    </Link>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
