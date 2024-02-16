"use client";

import { cn } from "@/utils/class-name";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ExtractLinkProps<L> = L extends React.ForwardRefExoticComponent<
  infer Props
>
  ? Props
  : never;

interface Props extends ExtractLinkProps<typeof Link> {
  exact?: boolean;
  activeClassName?: string;
}

export function NavLink({
  exact,
  activeClassName,
  ...linkProps
}: Props): JSX.Element {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === linkProps.href
    : pathname.startsWith(linkProps.href as string);

  return (
    <Link
      {...linkProps}
      className={cn(linkProps.className, isActive ? activeClassName : "")}
    />
  );
}
