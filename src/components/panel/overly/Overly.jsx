import React from 'react';


import "./overly.scss"

const Overly = (props) => {
    const { children, close, title } = props
    return (
        <div className="overly">
            <div className="overly-contnet container">
                <div className="head">
                    <div className="title">
                        {title}
                    </div>
                    <div className="close" onClick={close}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Overly;