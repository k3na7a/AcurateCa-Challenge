import React from 'react';

import ICON_LI from '../Assets/Images/icon-linkedin.svg'
import ICON_TW from '../Assets/Images/icon-twitter.svg'
import ICON_ECO from '../Assets/Images/logo-ecofel.svg'

const Footer = (props: any) => {
    return (
        <React.Fragment> 
            <div className={`footer mt-2`}>
                <div className="bg-brandprimary text-white">
                    <div className="wrapper d-flex flex-column flex-md-row justify-content-between py-4">
                        <div className="footer-section text-left pb-3">
                            <p className="pageSelect">About</p>
                            <p className="anchor">Organization and Structure</p>
                            <p className="anchor">Leadership</p>
                            <p className="anchor">Financial Intelligence Units</p>
                            <p className="anchor">Money Laundering and Terrorist Financing</p>
                        </div>
                        <div className="footer-section text-left pb-3">
                            <p className="pageSelect">News and Events</p>
                            <p className="anchor">News</p>
                            <p className="anchor">Events</p>
                        </div>
                        <div className="footer-section text-left pb-3">
                            <p className="pageSelect">Working Groups</p>
                            <p className="anchor">IEWG</p>
                            <p className="anchor">MSCWG</p>
                            <p className="anchor">PPWG</p>
                            <p className="anchor">TATWG</p>
                        </div>
                        <div className="footer-section text-left">
                            <p className="pageSelect">Members by Region</p>
                            <p className="pageSelect">Affiliates</p>
                            <p className="pageSelect">Resources</p>
                            <p className="pageSelect">Working with Egmont</p>
                        </div>
                        <div className="footer-section text-left">
                            <p className="pageSelect">FAQs</p>
                            <p className="pageSelect">Contact Us</p>
                            <p className="pageSelect">EG Membership Application Procedure</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-md-between wrapper pt-3 mb-3">
                    <div className="align-self-center copy d-block">
                        <p>{`© 2021 The Egmont Group`}</p>
                    </div>
                    <div>
                        <div className="">
                            <img className="footer-logo me-3" src={ICON_ECO} />
                            <img className="align-self-center icons me-1" src={ICON_TW} />
                            <img className="align-self-center icons" src={ICON_LI} />        
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    )
}
export default Footer;