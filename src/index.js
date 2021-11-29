import React, { useState, useEffect } from 'react'
import './style.css'

const StaggerText = (props) => {
    const {
        text = '<text placeholder>',
    } = props;

    const [animate, setanimate] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setanimate(true)
        }, props.triggerAfter == 0 || props.triggerAfter == null ? 0 : props.triggerAfter * 1000);
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
                height: `${(props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height)}${props.unit == null || props.unit == "" ? "px" : props.unit}`,
                // width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * letters.length : props.fontSize * letters.length : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
                width: `${props.width == 0 || props.width == null ? "" : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
            }}
        >
            {
                letters.map((item, i) => {
                    return (
                        <span key={i}
                            style={{
                                transform:
                                    props.reverse == null || props.reverse == "" || props.reverse == false || props.reverse !== true ?
                                        animate ?
                                            `translateY(0${props.unit == null || props.unit == "" ? "px" : props.unit})` : `translateY(${props.direction == null || props.direction == "" || props.direction !== "down" ?
                                                props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize
                                                : props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize
                                            }${props.unit == null || props.unit == "" ? "px" : props.unit})`
                                        :
                                        animate ?
                                            `translateY(${props.direction == null || props.direction == "" || props.direction !== "down" ?
                                                props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize
                                                : props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize
                                            }${props.unit == null || props.unit == "" ? "px" : props.unit})` : `translateY(0${props.unit == null || props.unit == "" ? "px" : props.unit})`
                                ,

                                transitionDelay: `${((props.duration == null || props.duration == 0 ? 0.7 : props.duration) / (props.stagger == null || props.stagger == 0 ? 60 : props.stagger)) * i}s`,
                                transitionDuration: `${props.duration == null || props.duration == 0 ? 0.7 : props.duration}s`,
                                transitionTimingFunction: "ease-in-out",
                                transitionProperty: "transform",
                                color: `${props.color == "" || props.color == null ? "#282828" : props.color}`,
                                fontSize: `${props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize}${props.unit == null || props.unit == "" ? "px" : props.unit}`,
                                fontWeight: `${props.color == "" || props.fontWeight == null ? "bold" : props.fontWeight}`,
                                fontFamily: `${props.fontFamily == "" || props.fontFamily == null ? "" : props.fontFamily}`
                            }}
                            className="stagger-animation-character"
                        >
                            {
                                item == "&nbsp;" ? <p key={i} style={{ fontSize: `${props.wordSpacing == null || props.wordSpacing == 0 ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.wordSpacing}${props.unit == null || props.unit == "" ? "px" : props.unit}` }} >&nbsp;</p> : item
                            }
                        </span>
                    )
                })}
        </div>
    )
}

export default StaggerText;