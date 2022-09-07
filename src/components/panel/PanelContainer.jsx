import React, { useState } from 'react';
import LabForm1 from './forms/lab_form_1/LabForm1';
import LabForm2 from './forms/lab_form_2/LabForm2';
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
            case("lab_form_1"):{return <LabForm1/>}
            case("lab_form_2"):{return <LabForm2/>}

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