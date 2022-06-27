import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

export default function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion--icon");

    const content = useRef(null);

    function toggle() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
        setActive === "active" ? "accordion--icon" : "accordion--icon rotate"
        );
        console.log(content.current.scrollHeight);
    }

    return (
        <div className="accordion--section">
            <button className={`accordion ${setActive}`} onClick={toggle}>
                <p className="accordion--title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion--content"
            >
                <div
                className="accordion--text"
                dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}