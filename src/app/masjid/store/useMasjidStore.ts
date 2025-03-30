import { create } from "zustand";
import Masjid from "../page";

export enum MasjidStatus {
    INITIAL = "INITIAL",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}

type MasjidState = {
    isOpenDialog: boolean;
    setIsOpenDialog: (isOpenDialog: boolean) => void;
    status: MasjidStatus;
    submitDoa: () => void;

};

export const useMasjidStore = create<MasjidState>(set => (
    {
        isOpenDialog: false,
        setIsOpenDialog: (isOpenDialog: boolean) => set({ isOpenDialog }),
        status: MasjidStatus.INITIAL,
        submitDoa: () => {
            set({ status: MasjidStatus.LOADING });
            setTimeout(() => {
                set({ status: MasjidStatus.SUCCESS });
            }, 5000);
        },
    }
));