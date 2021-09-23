import React from "react";
import UserTabs from "./UserTabs"
import { NavLink } from "react-router-dom";
import { Menu, Segment, Header, Button } from 'semantic-ui-react'

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className = "headerz">
        {user ? (
          <UserTabs handleLogoutClick = {handleLogoutClick}/>
        ) : (
          <>
            <Button><NavLink to="/">Home</NavLink></Button>
            <Button><NavLink to="/signup">Signup</NavLink></Button>
            <Button><NavLink to="/login">Login</NavLink></Button>
          </>
        )}
    </header>
  );
}

export default NavBar;
