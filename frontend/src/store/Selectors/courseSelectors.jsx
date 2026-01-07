import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const isCourseLoading = selector({
  key: "isCourseLoading",
  get: ({ get }) => {
    const state = get(courseState);
    return state.isLoading;
  }
});

export const courseDetails = selector({
  key: "courseDetails",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course;
  }
});

export const courseTitle = selector({
  key: "courseTitle",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.title : "";
  }
});
