
import { TYPE } from "../constants/index"



const INIT_STATE = {
    userData: [],
};

const user = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TYPE: {
            return {
                ...state,
                userData: action.payload,
            }
        }
        default:
            return state;

    }
}


export default user;
