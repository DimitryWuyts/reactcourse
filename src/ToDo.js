import React from "react";
function ToDo () {
    const style = {fontSize: 20}
    style.color ='red'
    return(
        <div style={style}>
                <input type="checkbox"/>
                <p>placeholder text here</p>
                <input type="checkbox"/>
                <p>placeholder text here</p>
                <input type="checkbox"/>
                <p>placeholder text here</p>
                <input type="checkbox"/>
                <p>placeholder text here</p>
                <input type="checkbox"/>
                <p>placeholder text here</p>
            </div>
    )
}
export default ToDo