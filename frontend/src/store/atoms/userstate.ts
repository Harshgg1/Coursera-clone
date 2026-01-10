import { atom } from "recoil";

export type UserState = {
    isLoading: Boolean,
    userEmail: string | null;
}

export const userstate = atom<UserState>({
    key: 'userstate',
    default: {
        isLoading: true,
        userEmail: null
    },
});