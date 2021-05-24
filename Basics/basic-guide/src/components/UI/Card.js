import React from 'react'

const Card = (props) => {
    const classes = 'card '+props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )//Alternate return when babel translates would be React.createElement('')
}

export default Card
