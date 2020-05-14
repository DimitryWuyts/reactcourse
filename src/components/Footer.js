import React from "react";

function Footer() {
    const firstName = 'dimi'
    const lastName = 'wuyts'
    const date = new Date()
    const hours = date.getHours()
    let timeOfDate

    if(hours < 12) {
        timeOfDate = 'morning'
    }else if (hours >= 12 && hours < 17) {
        timeOfDate = 'afternoon'
    }else{
        timeOfDate = 'night'
    }

    return (
        <div>
            <h1>Good : {timeOfDate}</h1>
        </div>
    )
}

export default Footer