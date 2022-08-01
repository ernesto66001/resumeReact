import React from 'react';
import './main.css'
const Main = () => {
    return (
        <div>
            <section style={{padding:'50px 0'}} className="hero" id="skills">
                <div className="container">
                    <h1 style={{marginLeft:'45%'}} className="my-skills">my skills</h1>
                    <div className="skills">
                        <div id='card1' className="card">
                            <div className="percent" >
                                <div className="dot">

                                </div>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>


                                </svg>
                                <div className="number">
                                    <h2>85 <span>%</span></h2>
                                    <p>language</p>
                                </div>
                            </div>
                        </div>
                        <div  id='card2' className="card">
                            <div className="percent">
                                <div className="dot">

                                </div>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>


                                </svg>
                                <div className="number">
                                    <h2>95 <span>%</span></h2>
                                    <p>html</p>
                                </div>
                            </div>
                        </div>
                        <div id='card3' className="card">
                            <div className="percent" >
                                <div className="dot">

                                </div>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>


                                </svg>
                                <div className="number">
                                    <h2>35 <span>%</span></h2>
                                    <p>piano</p>
                                </div>
                            </div>
                        </div>
                        <div id='card4' className="card">
                            <div className="percent" >
                                <div className="dot">

                                </div>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>


                                </svg>
                                <div className="number">
                                    <h2>20 <span>%</span></h2>
                                    <p>js</p>
                                </div>
                            </div>
                        </div>
                        <div id='card5' className="card">
                            <div className="percent" >
                                <div className="dot">

                                </div>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>


                                </svg>
                                <div className="number">
                                    <h2>15 <span>%</span></h2>
                                    <p>aikido</p>
                                </div>
                            </div>
                        </div>
                        <div id='card6' className="card">
                            <div className="percent" >
                                <div className="dot">

                                </div>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>


                                </svg>
                                <div className="number">
                                    <h2>80 <span>%</span></h2>
                                    <p>css</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;