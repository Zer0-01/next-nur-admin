import { create } from "zustand";

interface HomeState {
    isOpenModal: boolean;
    setIsOpenModal: (isOpen: boolean) => void;
}

export const useHomeStore = create<HomeState>((set) => (
    {
        isOpenModal: false,
        setIsOpenModal: (isOpen: boolean) => set({ isOpenModal: isOpen }),
    }
));