import React from 'react'
import _404 from "../assets/images/404.png"

export default class Error extends React.Component {

    render() {
        return (
            <div>
                <img src={_404} alt="404"/>
            </div>
        )
    }

}