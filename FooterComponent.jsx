import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-white p-5" ><h4>Site created and Design by GROUP 5 &copy;</h4></span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
