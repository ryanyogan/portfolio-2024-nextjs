import Link from "next/link";
import { SiRevoltdotchat } from "react-icons/si";
import { Container } from "./container";
import { NavLink } from "./nav-link";

export function Header(): JSX.Element {
  return (
    <header className="sticky h-18 top-0 border-b border-gray-200 py-4 bg-white bg-opacity-80 backdrop-blur-md font-medium z-10">
      <Container className="flex items-center justify-between gap-10">
        <Link href="/">
          <span className="text-4xl">
            <SiRevoltdotchat className="text-slate-800" />
          </span>
        </Link>
        <nav className="-mr-3">
          <ul className="flex items-center gap-3 font-semibold">
            <li>
              <NavLink
                href="/"
                className="p-3 text-slate-500 hover:text-black"
                activeClassName="text-slate-900"
                exact={true}
              >
                Me
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/blog"
                className="p-3 text-slate-500 hover:text-black"
                activeClassName="text-slate-900"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/shelf"
                className="p-3 text-slate-500 hover:text-black"
                activeClassName="text-slate-900"
              >
                Shelf
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/zoo"
                className="p-3 text-slate-500 hover:text-black"
                activeClassName="text-slate-900"
              >
                🐱
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
