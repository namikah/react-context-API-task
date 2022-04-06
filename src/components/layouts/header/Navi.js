import "./navi.css"
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useProductContext } from "../../../context/Products";

function Navi() {
  const [{ productsData }] = useProductContext([]);
  return (
    <Navbar color="light" light expand="md" className="navbar">
      <div className="container d-flex justify-content-between">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
          </NavItem>
        </Nav>
        <div>
          <span>Product count: {productsData.length}</span>
        </div>
        <Nav>
          <NavItem>
            <NavLink to={"/login"} className="nav-link">
              Login
            </NavLink>
          </NavItem>
        </Nav>
       
      </div>
    </Navbar>
  );
}

export default Navi;
