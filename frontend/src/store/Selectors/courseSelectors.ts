import { selector } from "recoil";
import { courseState, Course } from "../atoms/courseState";

export const isCourseLoading = selector<boolean>({
  key: "isCourseLoadingState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.isLoading;
  }
});


export const courseDetails = selector<Course | null>({
  key: "courseDetailsState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course;
  }
});


export const courseTitle = selector<string>({
  key: "courseTitleState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.title : "";
  }
});


export const coursePrice = selector<number | "">({
  key: "coursePriceState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.price : "";
  }
});

export const courseImage = selector<string>({
  key: "courseImageState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course?.image ?? "";
  }
});
