import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

function UserTabs({handleLogoutClick}) {
    return (
        <div className = "usertabs">
            <Menu className = "menuitems" color="black" inverted widths={7} size='massive'>
                <Menu.Item>
                    <NavLink exact to = "/">
                        Dr Chungus Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink exact to = "/courses">
                        Courses
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink exact to = "/numericalmethods">
                        Numerical Methods
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink exact to = "/grapher">
                        Grapher
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink exact to = "/testimonials">
                        Testimonials
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink exact to = "/profile">
                        Profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={handleLogoutClick}>Logout</Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default UserTabs