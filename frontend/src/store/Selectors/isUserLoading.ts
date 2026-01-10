import { userstate } from "../atoms/userstate";
import {selector} from "recoil";

export const isUserLoading = selector({
  key: 'userLoadingState',
  get: ({get}) => {
    const state = get(userstate);

    return state.isLoading;
  },
});
