import UserTabs from "./UserTabs"
import { NavLink } from "react-router-dom";
import { Button } from 'semantic-ui-react'

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className = "alltabs">
        {user ? 
          <UserTabs handleLogoutClick = {handleLogoutClick}/>
          : 
          <div className="firstlinks">
            <Button size='massive'><NavLink to="/">Home</NavLink></Button>
            <Button size='massive'><NavLink to="/signup">Signup</NavLink></Button>
            <Button size='massive'><NavLink to="/login">Login</NavLink></Button>
          </div>
        }
    </header>
  );
}

export default NavBar;
