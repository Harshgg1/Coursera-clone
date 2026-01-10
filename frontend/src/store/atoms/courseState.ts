import { atom } from "recoil";

export type Course = {
    _id: string, 
    title: string,
    description: string,
    price: number,
    image?:string,
    published?:boolean,
}

export type Coursestate = {
    isLoading: boolean,
    course: Course | null,
}

export const courseState = atom<Coursestate>({
    key: 'coursestate',
    default: {
        isLoading: true,
        course: null
    },
});