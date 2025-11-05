import React from "react";
import { twMerge } from "tailwind-merge";
import type { VIconProps } from ".";

export const Icon = ({ onClick, className, name = "slash" }: VIconProps) => (
  <i onClick={onClick} className={twMerge(`bi-${name} text-base`, className)} />
);
