import { ReactNode } from "react";
import cn from "classnames";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  target?: string;
}

export function PrimaryButton({ label, icon, href }: ButtonProps) {
  return href ? (
    <a className={cn(
      "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer",
      "text-zinc-950 hover:text-zinc-700",
      "bg-zinc-50 rounded-lg"
    )}
      href={href}
    >
      {icon}
      {label}
    </a>
  ) : (
    <button className={cn(
      "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer",
      "text-zinc-950 hover:text-zinc-700",
      "bg-zinc-50 rounded-lg"
    )}
    >
      {icon}
      {label}
    </button>
  )
}

export function SecondaryButton({ label, icon, href, onClick,target="_self" }: ButtonProps) {
  return href ? (
    <a href={href} target={target} className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-50 hover:text-zinc-300">
      {icon}
      {label}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-50 hover:text-zinc-300"
    >
      {icon}
      {label}
    </button>
  )
}