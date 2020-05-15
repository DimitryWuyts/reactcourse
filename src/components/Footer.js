import React from "react";

function Footer() {
    const firstName = 'dimi'
    const lastName = 'wuyts'
    const date = new Date(2018, 5,7,23)
    const hours = date.getHours()
    let timeOfDate
    const styles = {fontSize: 50}


    if (hours < 12) {
        timeOfDate = 'morning'
        styles.color = 'red'
    } else if (hours >= 12 && hours < 17) {
        timeOfDate = 'afternoon'
        styles.color = 'yellow'
    } else {
        timeOfDate = 'night'
        styles.color = 'green'

    }
    return (
        <div>
            <h1 style={styles}>Good {timeOfDate} : {firstName} {lastName}</h1>
        </div>
    )
}

export default Footer

