import React, { useState } from 'react';
import "./panel-container.scss"
import PanelNav from './panel-nav/PanelNav';

const PanelContainer = () => {

    const [form,selectForm]=useState("main-page")
    return (
        <div className="panel">
            <div className="panel-container container" >
                <PanelNav selectForm={selectForm}/> 
                <div>{form}</div>

            </div>
        </div>
    );
}

export default PanelContainer;