import { TYPE } from "../constants/index"

import axios from "axios"


export const fetchdetails = (i) => {
    return (dispatch) => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos/" + i)
            .then((data) => {
                if (data.status === 200) {
                    dispatch({ type: TYPE, payload: data.data });
                }
            })
            // eslint-disable-next-line func-names
            .catch(function (error) {
                // eslint-disable-next-line no-console
                console.log("Error****:", error.message);
            });
    };
};

