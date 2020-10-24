import React from "react"
import { Menu } from 'semantic-ui-react'
class Navbar extends React.Component {
    render() {
        return <Menu pointing secondary id='Navbar'>
            <nav style={{
                lineHeight:0
            }}>
                <h1 id='title'>Freddy Weather Report</h1>
            </nav>
        </Menu>
    }
}
export default Navbar;