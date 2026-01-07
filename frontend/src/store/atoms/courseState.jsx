import { atom } from "recoil";

export const courseState = atom({
    key: 'coursestate',
    default: {
        isLoading: true,
        course: null
    },
});