import { getItemFromLocalStorage } from '@/lib/utils';
import create from 'zustand';

interface UserStore {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    user: getItemFromLocalStorage('user') || null,
  addUser: (user: User) => set({ user }),
  removeUser: () => set({ user: null }),
}));

export default useUserStore;