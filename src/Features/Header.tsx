import React from 'react';

import LOGO from '../Assets/Images/logo-egmont.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ICON_LI from '../Assets/Images/icon-linkedin.svg'
import ICON_TW from '../Assets/Images/icon-twitter.svg'
import ICON_BARS from '../Assets/Images/ICON-BARS.svg'

const Header = (props: any) => {
    return (
        <React.Fragment> 
            <div className={`header wrapper`}>
                <div className="d-flex justify-content-between py-3">
                    <div className="d-flex align-self-center cursor">
                        <img className="logo align-self-center mr-3" src={LOGO} alt="egmont-logo" />
                        <div className="ms-4 logo-text">
                            <p className="m-0">Egmont Group</p>
                            <p className="m-0">of Financial</p>
                            <p className="m-0">Intelligence Units</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-self-center">
                        <div className="mb-3 d-flex justify-content-between">
                            <select className="form-select-sm" aria-label="Default select example">
                                <option value="EN">{`ENGLISH`}</option>
                                <option value="FR">{`FRANÇAIS`}</option>
                                <option value="SP">{`ESPAÑOL`}</option>
                            </select>
                            <div className="d-none d-md-block">
                                <img className="icons me-1" src={ICON_TW} />
                                <img className="icons me-3" src={ICON_LI} />
                                <img className="icons-menu" src={ICON_BARS} />
                            </div>
                        </div>
                        <div className="d-none d-md-block">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control rounded-0 bg-muted" 
                                    placeholder="Search egmontgroup.org" 
                                    aria-label="Recipient's username" 
                                    aria-describedby="basic-addon2" 
                                />
                                <span className="input-group-text rounded-0 bg-muted" id="basic-addon2">
                                    <FontAwesomeIcon className="text-blue" icon={["fas", "search"]} size={'lg'}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-block d-md-none mb-2">
                    <div className="mb-2 d-flex justify-content-end">
                                <img className="icons me-1" src={ICON_LI} />
                                <img className="icons me-3" src={ICON_TW} />
                                <img className="icons-menu align-self-center" src={ICON_BARS} />
                    </div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control rounded-0 bg-muted" 
                            placeholder="Search egmontgroup.org" 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" 
                        />
                        <span className="input-group-text rounded-0 bg-muted" id="basic-addon2">
                            <FontAwesomeIcon className="text-blue" icon={["fas", "search"]} size={'lg'}/>
                        </span>
                    </div>
                </div>


            </div>
        </React.Fragment> 
    )
}
export default Header;