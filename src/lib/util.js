import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...classes) => twMerge(clsx(...classes))

export const getColorCode = (value) => {
  if (typeof value !== 'string') return null;
  const colorCode = value.match(/\[#([0-9A-Fa-f]{6})\]/);
  return colorCode ? `#${colorCode[1]}` : null;
};
