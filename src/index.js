import React, { useState, useEffect } from 'react';
import './style.css';

const StaggerText = ({
    text = "<text placeholder>",
    triggerAfter = 0,
    height,
    fontSize,
    unit,
    width,
    reverse,
    direction,
    duration,
    color,
    fontWeight,
    fontFamily,
    stagger,
    wordSpacing,
    ...props
}) => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, triggerAfter);
    })

    if (typeof text !== 'string' || text.length === 0) {
        throw new Error('Wrong text property');
    }

    const letters = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            letters.push("&nbsp;");
        } else {
            letters.push([text[i]])
        }
    }

    return (
        <div
            className="stagger-animation-text"
            style={{
                height: `${(height == 0 || height == null ? fontSize == 0 || fontSize == null ? 48 : fontSize : height)}${unit == null || unit == "" ? "px" : unit}`,
                width: `${width == 0 || width == null ? "" : width}${unit == null || unit == "" ? "px" : unit}`
            }}
        >
            {
                text[Symbol.iterator].map((item, i) => {
                    return (
                        <span key={i}
                            style={{
                                transform:
                                    reverse == null || reverse == "" || reverse == false || reverse !== true ?
                                        animate ?
                                            `translateY(0${unit == null || unit == "" ? "px" : unit})` : `translateY(${direction == null || direction == "" || direction !== "down" ?
                                                fontSize == null || fontSize == 0 ? 48 : fontSize
                                                : fontSize == null || fontSize == 0 ? -48 : -fontSize
                                            }${unit == null || unit == "" ? "px" : unit})`
                                        :
                                        animate ?
                                            `translateY(${direction == null || direction == "" || direction !== "down" ?
                                                fontSize == null || fontSize == 0 ? -48 : -fontSize
                                                : fontSize == null || fontSize == 0 ? 48 : fontSize
                                            }${unit == null || unit == "" ? "px" : unit})` : `translateY(0${unit == null || unit == "" ? "px" : unit})`
                                ,

                                transitionDelay: `${((duration == null || duration == 0 ? 0.7 : duration) / (stagger == null || stagger == 0 ? 60 : stagger)) * i}s`,
                                transitionDuration: `${duration == null || duration == 0 ? 0.7 : duration}s`,
                                transitionTimingFunction: "ease-in-out",
                                transitionProperty: "transform",
                                color: `${color == "" || color == null ? "#282828" : color}`,
                                fontSize: `${fontSize == 0 || fontSize == null ? 48 : fontSize}${unit == null || unit == "" ? "px" : unit}`,
                                fontWeight: `${color == "" || fontWeight == null ? "bold" : fontWeight}`,
                                fontFamily: `${fontFamily == "" || fontFamily == null ? "" : fontFamily}`
                            }}
                            className="stagger-animation-character"
                        >
                            {
                                item == "&nbsp;" ? <p key={i} style={{ fontSize: `${wordSpacing == null || wordSpacing == 0 ? fontSize == 0 || fontSize == null ? 48 : fontSize : wordSpacing}${unit == null || unit == "" ? "px" : unit}` }} >&nbsp;</p> : item
                            }
                        </span>
                    )
                })}
        </div>
    )
}

export default StaggerText;