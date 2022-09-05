import { redirect, server_req } from "../../../container/helper"

export const handel_user_nav = async () => {
    let data = await server_req("/user/user_forms", "post", {})
    const { forms_list } = data.data
    let final_list = []
    forms_list.forEach(e => {
        let index = final_list.findIndex(i => i.groupe === e.groupe)
        if (index == -1) {
            final_list.push({
                groupe: e.groupe,
                filds: [e]
            })
        }
        else {
            final_list[index].filds.push(e)
        }

    })
    return final_list
}