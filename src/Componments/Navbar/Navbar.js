import React from "react"
import { Menu } from 'semantic-ui-react'
class Navbar extends React.Component {
    render() {
        return <Menu pointing secondary id='Navbar'>
            <nav>
                <img src='https://picsum.photos/40' alt='Error'></img>
                <h1>Weather Report</h1>
            </nav>
        </Menu>
    }
}
export default Navbar;