import React, { useState, useEffect } from 'react'
import './style.css'

const StaggerText = (props) => {

    const text = props.text == null || props.text == "" ? "STAGGER TEXT" : props.text;
    const [animate, setanimate] = useState(false);

    const array = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            array.push("&nbsp;");
        } else {
            array.push([text[i]])
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setanimate(true)
        }, props.triggerAfter == 0 || props.triggerAfter == null ? 0 : props.triggerAfter * 1000);
    })

    return (
        <div className="stagger-animation-text"
            style={{
                height: `${props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height}px`,
                width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * array.length : props.fontSize * array.length : props.width}px`
            }}
        >
            {
                array.map((item, i) => {
                    return (
                        <h1 key={i}
                            style={{
                                transform:
                                    props.reverse == null || props.reverse == "" || props.reverse == false || props.reverse !== true ?
                                        animate ?
                                            "translateY(0px)" :
                                            `translateY(${props.direction == null || props.direction == "" || props.direction !== "down" ?
                                                props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize
                                                : props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize
                                            }px)`
                                        :
                                        animate ?
                                            `translateY(${props.direction == null || props.direction == "" || props.direction !== "down" ?
                                                props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize
                                                : props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize
                                            }px)` : "translateY(0px)"
                                ,

                                transitionDelay: `${((props.duration == null || props.duration == 0 ? 0.7 : props.duration) / (props.stagger == null || props.stagger == 0 ? 60 : props.stagger)) * i}s`,
                                transitionDuration: `${props.duration == null || props.duration == 0 ? 0.7 : props.duration}s`,
                                transitionTimingFunction: "ease-in-out",
                                transitionProperty: "transform",
                                color: `${props.color == "" || props.color == null ? "#282828" : props.color}`,
                                fontSize: `${props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize}px`,
                                fontWeight: `${props.color == "" || props.fontWeight == null ? "bold" : props.fontWeight}`,
                                fontFamily: `${props.fontFamily == "" || props.fontFamily == null ? "" : props.fontFamily}`
                            }}
                            className="stagger-animation-character"
                        >
                            {
                                item == "&nbsp;" ? <h1 key={i} style={{ fontSize: `${props.wordSpacing == null || props.wordSpacing == 0 ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.wordSpacing}px` }} >&nbsp;</h1> : item
                            }
                        </h1>
                    )
                })}
        </div>
    )
}

export default StaggerText;