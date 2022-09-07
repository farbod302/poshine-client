import React from 'react';

import "./lab-form-2.scss"
import { form_2_inputs } from './lab_form_2';


const LabForm2 = () => {


    return (
        <div className="form-container">
            <div className="lab-form-2">
                <div className="content">
                    <div className="form-title">
                        ثبت نتایج کیفی فیلم تازه
                    </div>
                    <div className="ltr-form form_2">
                        <div className="row row-1">
                            {form_2_inputs.map(inp =>
                                <div className="input eng">
                                    <div className="label">{inp[0]}</div>
                                    <input type="text" id={inp[0].replace(/ /g, '_').toLowerCase()} />
                                    <div className="label">{inp[1]}</div>
                                </div>
                            )}
                            <div className="check-box-groupe">
                                <div className="label-check">
                                    Trement Type In
                                </div>
                                <div className="check-boxs">
                                    <div className="each-box">
                                        <input type="radio" name="in" defaultChecked /> None
                                    </div>
                                    <div className="each-box">
                                        <input type="radio" name="in" /> Corona
                                    </div>
                                    <div className="each-box">
                                        <input type="radio" name="in" /> Flame
                                    </div>
                                </div>
                                <div className="input eng">
                                    <div className="label">Treament Instensity In</div>
                                    <input type="text" />
                                    <div className="label">mN/m</div>
                                </div>
                            </div>
                            <div className="check-box-groupe">
                                <div className="label-check">
                                    Trement Type Out
                                </div>
                                <div className="check-boxs">
                                    <div className="each-box">
                                        <input type="radio" name="out" defaultChecked /> None
                                    </div>
                                    <div className="each-box">
                                        <input type="radio" name="out" /> Corona
                                    </div>
                                    <div className="each-box">
                                        <input type="radio" name="out" /> Flame
                                    </div>
                                </div>
                                <div className="input eng">
                                    <div className="label">Treament Instensity out</div>
                                    <input type="text" />
                                    <div className="label">mN/m</div>
                                </div>
                            </div>
                        </div>
                        <div className=" row row-2">
                            <div className="note">
                                <div className="title eng">
                                    Quality Note(s):
                                </div>
                                <textarea></textarea>
                            </div>
                            <div className="btns">
                                <div className="input eng">
                                    <div className="label">Test Temp</div>
                                    <input type="text" />
                                    <div className="label">C</div>
                                </div>
                                <div className="input eng">
                                    <div className="label">Test Humidity</div>
                                    <input type="text" />
                                    <div className="label">%</div>
                                </div>
                                <div className="input eng">
                                    <div className="label">Test Complet roll</div>
                                    <input type="text" />
                                    <div className="label"></div>
                                </div>
                                <div className="btns-container">
                                    <button>next</button>
                                    <button>Previous</button>
                                    <button>Find</button>
                                    <button>last</button>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabForm2;