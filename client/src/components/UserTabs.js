import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

function UserTabs({handleLogoutClick}) {
    return (
        <>
            <Menu>
                <Menu.Item>
                    <NavLink exact to = "/">
                        Home
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
                    <NavLink exact to = "/extras">
                        Extras
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink exact to = "/testimonials">
                        Testimonials
                    </NavLink>
                </Menu.Item>
            </Menu>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </>
    )
}

export default UserTabs