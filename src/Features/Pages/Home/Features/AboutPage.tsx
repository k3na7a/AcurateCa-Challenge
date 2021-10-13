import React from 'react';
import './AboutPage.css'
import { STRINGS } from '../../../../Data/App-Data'

import BLOCK_1 from '../../../../Assets/Images/block1.png'
import BLOCK_2 from '../../../../Assets/Images/block2.png'
import BLOCK_3 from '../../../../Assets/Images/block3.png'
import BLOCK_4 from '../../../../Assets/Images/block4.png'

const AboutPage = (props: any) => {
    return (
        <React.Fragment> 
            
            <div className="About-Header">
                <div className="wrapper pt-5">
                    <p className="d-inline bg-white aboutHeaderText px-2">ABOUT THE EGMONT GROUP</p>
                </div>
            </div>

            <div className="wrapper">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <div className="bm-wrap">
                        </div>
                    </div>
                    <div className="flex-grow-1 ms-3 flex-column">
                        <p className="d-block router mb-4 mt-2">
                            <span className="back">{`Home`}</span>{` > `}<span>{`About`}</span>
                        </p>
                        <div className="row text-subheader">
                            <div className="col-12 col-md-6 mb-3">
                                {STRINGS.EN.ABOUT.HEADER_1}
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                {STRINGS.EN.ABOUT.HEADER_2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-wrapper mt-5 d-flex-row mb-5">
                <div className="row g-3">
                    <div className="col-12 col-lg-3">
                        <div className="card-item">
                            <img src={BLOCK_1} className="w-100 card-item-img" />
                            <div className="w-100 bg-brandprimary text-white px-3 py-2 text-card-header">
                                {`Organization and Structure`}
                            </div>
                            <div className="w-100 px-3 py-2 text-card-content">
                                <span className="d-block mb-4">{`${STRINGS.EN.ABOUT.HEADER_2}`}</span>
                                <div className="d-block mb-5">
                                    <div className="bg-light d-inline px-3 learnMore py-1">
                                        {`LEARN MORE`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card-item">
                            <img src={BLOCK_2} className="w-100 card-item-img" />
                            <div className="w-100 bg-brandprimary text-white px-3 py-2 text-card-header">
                            {`Egmont Group Leadership`}
                            </div>
                            <div className="w-100 px-3 py-2 text-card-content">
                                <span className="d-block mb-4">{`${STRINGS.EN.ABOUT.HEADER_2}`}</span>
                                <div className="d-block mb-5">
                                    <div className="bg-light d-inline px-3 learnMore py-1">
                                        {`LEARN MORE`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card-item">
                            <img src={BLOCK_3} className="w-100 card-item-img" />
                            <div className="w-100 bg-brandprimary text-white px-3 py-2 text-card-header">
                                {`Financial Intelligence Units`}
                            </div>
                            <div className="w-100 px-3 py-2 text-card-content">
                                <span className="d-block mb-4">{`${STRINGS.EN.ABOUT.HEADER_2}`}</span>
                                <div className="d-block mb-5">
                                    <div className="bg-light d-inline px-3 learnMore py-1">
                                        {`LEARN MORE`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="card-item">
                            <img src={BLOCK_4} className="w-100 card-item-img" />
                            <div className="w-100 bg-brandprimary text-white px-3 py-2 text-card-header">
                                {`Money Laundering and Terrorist Financing`}
                            </div>
                            <div className="w-100 px-3 py-2 text-card-content">
                                <span className="d-block mb-4">{`${STRINGS.EN.ABOUT.HEADER_2}`}</span>
                                <div className="d-block mb-5">
                                    <div className="bg-light d-inline px-3 learnMore py-1">
                                        {`LEARN MORE`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment> 
    )
}
export default AboutPage;