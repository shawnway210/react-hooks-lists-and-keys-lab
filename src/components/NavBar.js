import React from "react";

function NavBar() {
  const links = [
    {id: 1, name: "home", url: "#home"},
    {id: 2, name: "about", url: "#about"},
    {id: 3, name: "projects", url: "#projects"}
  ]

  return (
  <nav>
    {links.map((link) => (
      <a key={link.id} href={link.url}>{link.name}</a>
    ))}
    
  </nav>
  )
}

export default NavBar;
