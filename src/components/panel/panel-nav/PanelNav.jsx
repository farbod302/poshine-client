import React, { useEffect, useState } from 'react';
import { redirect } from '../../../container/helper';
import { handel_user_nav } from './nav_filds';
import "./panel-nav.scss"

const PanelNav = ({ selectForm }) => {

    const [list, setList] = useState([])
    const [toggle, setToggle] = useState(true)

    const toggle_nav = () => {
        document.querySelector("#nav").classList.toggle("de-active")
        let drop_downs = document.querySelectorAll(".drop-down")
        drop_downs.forEach(e => e.classList.remove("drop-down-active"))
        setToggle(!toggle)
    }


    const active_drop_down = (index) => {
        if (!toggle) toggle_nav()
        let drop_downs = document.querySelectorAll(".drop-down")
        drop_downs.forEach(e => e.classList.remove("drop-down-active"))
        drop_downs[index].classList.add("drop-down-active")
    }


    useEffect(() => {
        if(!localStorage.getItem("token")){return redirect("/")}
        let fetch = async () => {
            let list = await handel_user_nav()
            setList(list)
        }
        fetch()
    }, [])


    const groupe_handler = (groupe) => {
        switch (groupe) {
            case ("admin"): { return <div className="list-heads"><i className="fas fa-key"></i><div>مدیریت</div><i className="fas fa-chevron-down"></i></div> }
            case ("lab"): { return <div className="list-heads"><i className="fas fa-flask"></i><div>آزمایشگاه</div><i className="fas fa-chevron-down"></i></div> }
        }
    }

    return (
        <div className="panel-nav " id="nav">
            <div className="head">
                <div className="nav-content">
                    <div className="toggle">
                        <i className="fas fa-arrow-right" onClick={toggle_nav}></i>
                        <div className="title">
                            منو کاربری
                        </div>
                    </div>
                    <div className="list">
                        {list.map((l, index) =>

                            <div className="each_list" >
                                <div className="list-label" onClick={() => { active_drop_down(index) }}>{groupe_handler(l.groupe)}</div>
                                <div className={`drop-down `}>
                                    <div className="drop-content">
                                        {l.filds.map(sl =>
                                            <div className="e-drop-down" onClick={() => { selectForm(sl.id); }}>
                                                <i className={`fas fa-${sl.icon}`}></i>
                                                <div>{sl.label}</div>
                                            </div>

                                        )}
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelNav;