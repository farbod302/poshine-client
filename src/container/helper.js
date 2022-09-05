import axios from "axios"
import NotificationManager from "react-notifications/lib/NotificationManager"
import { server } from "./static"

export const input_picker = (id) => {
    let element = document.querySelector(`#${id}`)
    return element?.value || ""
}

export const notif = (status, msg) => {
    NotificationManager[status ? "success" : "error"](msg)
}


export const server_req = async (path, method, payload) => {
    const { data } = await axios[method](
        `${server}${path}`
        , payload,
        {
            headers: { token: localStorage.getItem("token") || "" }
        }
    )
    return data
}


export const redirect = (path) => {
    return window.location.hash = path
}