import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const setItemToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemFromLocalStorage = (key: string): any | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

function removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);  
}

export { setItemToLocalStorage, getItemFromLocalStorage, removeItemFromLocalStorage };
