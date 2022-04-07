import "./navi.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useProductContext } from "../../../context/Products";
import { useHistory } from "react-router-dom";
import { useLoadingContext } from "../../../context/loading";
import { Link } from "react-router-dom";

function Navi() {
  const [{ productsData }] = useProductContext([]);
  const [{ localLogin, setLocalLogin }] = useLoadingContext([]);
  const {push} = useHistory();

  const handleLogout = (e)=>{
    localStorage.removeItem("login")
    setLocalLogin(false);
    push("/")
  }
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
        <h6>
          WE HAVE{" "}
          <span className="product-count-header">{productsData.length}</span>{" "}
          REGISTERED PRODUCTS IN OUR WEB PAGE
        </h6>
        <Nav>
          <NavItem>
            {localLogin? (
              <Link to={""} onClick={handleLogout} className="nav-link">Logout</Link>
            ) : (
              <NavLink to={"/login"} className="nav-link">
                Login
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Navi;
