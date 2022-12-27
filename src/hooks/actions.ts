import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {githabActions} from "../store/githab/githab.slice";

const actions = {
    ...githabActions,
}

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch);
}