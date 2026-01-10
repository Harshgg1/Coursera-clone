
import { userstate } from "../atoms/userstate";
import {selector} from "recoil";

export const userEmailState = selector({
  key: 'userEmailState',
  get: ({get}) => {
    const state = get(userstate);

    return state.userEmail;
  },
});
