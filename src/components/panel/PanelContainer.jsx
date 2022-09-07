import React, { useState } from 'react';
import Users from './forms/users/Users';
import Welcome from './forms/welcome/Welcome';
import "./panel-container.scss"
import PanelNav from './panel-nav/PanelNav';

const PanelContainer = () => {

    const [form,selectForm]=useState("welcome")


    const pick_form=()=>{

        switch(form){
            case("welcome"):{return <Welcome/>}
            case("add_edit_user"):{return <Users/>}

            default:{return <Welcome/>}
        }


    }
    return (
        <div className="panel">
            <div className="panel-container container" >
                <PanelNav selectForm={selectForm}/> 
                <div>{pick_form()}</div>

            </div>
        </div>
    );
}

export default PanelContainer;