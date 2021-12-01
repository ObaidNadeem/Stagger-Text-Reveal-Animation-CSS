import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import StaggerText from '../../src';
import './style.css'
import image from './image.jpeg'
const App = () => {
    const [load, setload] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setload(true)
        }, 0);
    })

    return (
        <div className="demo-main" >
            {load ?
                <div>
                    <h3
                        style={{
                            position: "absolute",
                            right: "80px",
                            fontFamily: "'Antic Didone', serif",
                            fontWeight: "lighter",
                            top: "0"
                        }}
                    >ilusión</h3>
                    <div className="stagger">
                        <StaggerText
                            text={"THE ILLUSION OF"}
                            fontFamily={"'Antic Didone', serif"}
                            fontWeight={"lighter"}
                            fontSize={7}
                            duration={0.9}
                            // stagger={10}
                            //   direction={"down"}
                            // reverse={true}
                            unit={"vw"}
                            // wordSpacing={200}
                            // width={850}
                        //   height={100}
                        />
                    </div>
                    <div className="stagger">
                        <StaggerText
                            text={"PERFECTION,"}
                            fontFamily={"'Antic Didone', serif"}
                            fontWeight={"10"}
                            fontSize={7}
                            // width={900}
                            duration={0.9}
                            triggerAfter={600}
                            unit={"vw"}
                            //   height={100}
                        />
                    </div>
                    <div className="stagger">
                        <StaggerText
                            text={"IS AN ILLUSION"}
                            fontFamily={"'Antic Didone', serif"}
                            fontWeight={"10"}
                            fontSize={7}
                            duration={0.9}
                            triggerAfter={700}
                            unit={"vw"}
                            //   height={100}

                        />
                    </div>
                    <div className="demo-bottom">
                        <div className="stagger">
                            <StaggerText
                                text={"ANYWAY."}
                                fontFamily={"'Antic Didone', serif"}
                                fontWeight={"10"}
                                fontSize={7}
                                duration={0.9}
                                // width={450}
                                triggerAfter={800}
                                unit={"vw"}
                                // height={100}
                            // direction={"down"}
                            />
                        </div>
                        {/* <div className="image-main-container">
                            <div className="image-container">
                                <div className="image">
                                    <img src={image} />
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <a
                        href="https://obaidnadeem.surge.sh"
                        target="_blank"
                        style={
                            {
                                fontStyle: "none",
                                color: "#282828"
                            }
                        }
                    >
                        <h3
                            style={{
                                position: "absolute",
                                left: "80px",
                                fontFamily: "'Antic Didone', serif",
                                fontWeight: "lighter",
                                bottom: "0px",
                                cursor: "pointer",
                            }}
                        >obaid nadeem</h3>
                    </a>
                </div>
                : ""
            }
        </div>
    );
}

render(<App />, document.getElementById("root"));