import React from 'react';

import "./lab-form-1.scss"


const LabForm1 = () => {
    return (
        <div className="form-container">
            <div className="lab-form-1">

                <div className="content">
                    <div className="form-title">
                        ثبت شناسنامه جامبورول
                    </div>
                    <div className="ltr-form eng">
                        <div className=" row row-1">
                            <div className="input">
                                <div className="label">Lot Code</div>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <div className="label">Roll Nr.</div>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <div className="label">Produvtion Date</div>
                                <input type="date" />
                                <div className="label">Y/M/D</div>

                            </div>
                            <div className="input">
                                <div className="label">Prodaction From</div>
                                <input type="time" />
                                <div className="label">H:M</div>

                            </div>
                            <div className="input">
                                <div className="label">To</div>
                                <input type="time" />
                                <div className="label">H:M</div>

                            </div>
                            <div className="input">
                                <div className="label">Roll Length</div>
                                <input type="text" />
                                <div className="label">Meters</div>

                            </div>
                            <div className="input">
                                <div className="label">Roll Width</div>
                                <input type="text" />
                                <div className="label">Milimeters</div>

                            </div>
                            <div className="input">
                                <div className="label">Roll Weight</div>
                                <input type="text" />
                                <div className="label">Kilograms</div>

                            </div>
                        </div>
                        <div className="row row-2">
                            <div className="content">
                                <div className="sub-title">
                                    Roll History Notes
                                </div>
                                <div className="withe-space">

                                </div>
                            </div>

                        </div>
                        <div className="row btns">
                            <button>QC date</button>
                            <button>New Roll</button>
                            <button>New Lot</button>
                            <button>Next</button>
                            <button>Previous</button>
                            <button>Last</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LabForm1;