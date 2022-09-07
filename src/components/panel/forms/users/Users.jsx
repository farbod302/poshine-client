import React, { Fragment, useEffect, useState } from 'react';
import { notif, server_req_get, server_req_post } from '../../../../container/helper';
import Overly from '../../overly/Overly';

import "./users.scss"


const Users = () => {

    const [overly, setOverly] = useState(false)
    const [acc, setAcc] = useState([])
    const [pick, setPick] = useState([])
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)


    useEffect(() => {
        const fetch = async () => {
            let data = await server_req_get("/public/accesses_list")
            setAcc(data.accesses)
            let users = await server_req_get("/user/list")
            setUsers(users)
        }
        fetch()

    }, [update])


    const to_show = () => {
        let exist_ids = pick.map(e => { return e.acc_id })
        let to_show = [...acc].filter(e => !exist_ids.includes(e.acc_id))
        return to_show
    }

    const pick_user_for_edit = (user) => {
        let p_acc = [...acc].filter(e => user.access.includes(e.acc_id))
        setPick(p_acc)
        setOverly(user)

    }

    const close_overly = () => {
        setOverly(false)
        setPick([])
    }

    const submit_form = async () => {
        let inputs = document.querySelectorAll("input")
        let payload = {
            name: inputs[1].value,
            lastName: inputs[2].value,
            id: inputs[3].value,
            phone: inputs[4].value,
            password: inputs[5].value,
        }
        payload.acc = pick.map(e => { return e.acc_id })

        if (overly.id) {
            const data = await server_req_post("/admin/edit_user", { ...payload, id: overly.id })
            notif(data.status,data.msg)
            if(data.status){ close_overly()}
        }
        else{
            const data = await server_req_post("/admin/add_user", { ...payload })
            notif(data.status,data.msg)
            if(data.status){ close_overly()}

        }
        return setUpdate(!update)

    }
    return (
        <Fragment>
            <div className="form-container">
                <div className="container-handler">
                    <div className="title">
                        مدیریت کاربران
                    </div>
                    <div className="tools">
                        <div className="tool" onClick={() => { setOverly({}) }}>
                            <div className="icon">
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className="label">افزودن کاربر</div>
                        </div>

                        <div className="tool-search">
                            <div className="icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <input type="text" placeholder="جستجو با نام و id" />
                        </div>
                    </div>
                    <div className="tabel-container">
                        <table className="tabel">
                            <tr>
                                <td>#</td>
                                <td>نام</td>
                                <td>نام خانوادگی</td>
                                <td>شناسه کاربری</td>
                                <td>شماره تماس</td>
                                <td>ویرایش</td>
                            </tr>
                            {users.map((user, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.idenity.name}</td>
                                    <td>{user.idenity.lastName}</td>
                                    <td>{user.id}</td>
                                    <td>{user.idenity.phone}</td>
                                    <td onClick={() => { pick_user_for_edit(user) }}><i className="fas fa-edit"></i></td>
                                </tr>

                            )}
                        </table>
                    </div>
                </div>

            </div>
            {overly ?
                <Overly title="افزودن کاربر" close={close_overly}>
                    <div className="form">
                        <div className="input">
                            <div className="label">نام</div>
                            <input type="text" defaultValue={overly.idenity?.name || ""} />
                        </div>
                        <div className="input">
                            <div className="label">نام خانوادگی</div>
                            <input type="text" defaultValue={overly.idenity?.lastName || ""} />
                        </div>
                        <div className="input">
                            <div className="label">شناسه کاربری (نام کاربری)</div>
                            <input type="text" defaultValue={overly.id || ""} />
                        </div>
                        <div className="input">
                            <div className="label">شماره تماس </div>
                            <input type="number" defaultValue={overly.idenity?.phone || ""} />
                        </div>
                        <div className="input">
                            <div className="label">رمز عبور</div>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="acc">
                        <div className="sub-title">
                            دسترسی های کاربر
                        </div>
                        <div className="acc-and-pick">
                            <div className="e-access">
                                <div className="title">
                                    لیست دسترسی ها
                                </div>
                                <ul>
                                    {to_show().map(ac => <li onClick={() => { setPick(prv => prv.concat(ac)) }}>{ac.label}</li>)}
                                </ul>
                            </div>
                            <div className="pick">
                                <div className="title">
                                    دسترسی های انتخاب شده
                                </div>

                                <ul>
                                    {pick.map(ac => <li onClick={() => { setPick(prv => prv.filter(acc => acc.acc_id !== ac.acc_id)) }}>{ac.label}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="submit">
                        <div onClick={submit_form}>ثبت کاربر</div>
                    </div>
                </Overly> :
                null
            }
        </Fragment>
    );
}

export default Users;