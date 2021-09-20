import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"


import { useEffect } from "react"

import axios from "axios"

import fetchdetails from "/home/saikrishna/cashapona /redux-practice-1/api/src/Redux store/Action creators/fetch.js"

import user from "/home/saikrishna/cashapona /redux-practice-1/api/src/Redux store/Reducers/user.js"

const Body = () => {
    const dispatch = useDispatch()

    const { userData } = useSelector(({ user }) => user);


    console.log(userData, "lll")

    let userIdGiven

    // const fetchdetails = async () => {
    //     const response = await axios
    //         .get("https://jsonplaceholder.typicode.com/todos")
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     console.log(response)
    //     //dispatch(updateState(response.data))
    // }
    useEffect(() => {
        dispatch(fetchdetails())
    }, []);



    return (
        <div className="container-main" style={{
            textAlign: "center"
        }}>
            <h1 className="heading" >Click to get details of userId</h1>
            {/* <input type="text" onChange={updateInputId} /> */}
            {/* <button onClick={getData()}>Click here</button> */}
            <p className="para">{userData.id}</p>
            <p className="para">{userData.title}</p>
            <p className="para">{userData.completed}</p>
        </div >
    )
}

export default Body;