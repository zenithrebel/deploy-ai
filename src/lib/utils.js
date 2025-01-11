import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getInitials(name) {
  if (!name) return "";
  const words = name.split(" ");
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return (
    words[0].charAt(0).toUpperCase() +
    words[words.length - 1].charAt(0).toUpperCase()
  );
}

export const shortenAddress = (address, startChars = 4, endChars = 4) => {
  try {
    return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
  } catch (error) {
    return address;
  }
};
