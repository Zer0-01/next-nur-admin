import { create } from "zustand";
import Masjid from "../page";
import axios from "axios";

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
    submitDoa: (doaTitle: string, doa: string, maksud: string) => Promise<void>;

};

export const useMasjidStore = create<MasjidState>(set => (
    {
        isOpenDialog: false,
        setIsOpenDialog: (isOpenDialog: boolean) => set({ isOpenDialog }),
        status: MasjidStatus.INITIAL,
        submitDoa: async (doaTitle: string, doa: string, maksud: string) => {
            set({ status: MasjidStatus.LOADING });
            try {
                await axios.post("http://localhost:3001/doa", {
                    title: doaTitle,
                    content: doa,
                    translation: maksud,
                });

                set({ status: MasjidStatus.SUCCESS });

                setTimeout(() => {
                    set({ isOpenDialog: false, status: MasjidStatus.INITIAL });
                }, 2000);
            } catch (e) {
                set({ status: MasjidStatus.ERROR });
                console.log(e);
            }

        },
    }
));