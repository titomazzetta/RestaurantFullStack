/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import AppContext from "./context";

const Layout = (props) => {
  const title = "Welcome to Nextjs";
  const { user, setUser, logout } = useContext(AppContext); // Ensure logout is provided from context
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setUser(null);
  };

  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <header>
        <style jsx>{`
          a {
            color: white;
          }
          h5 {
            color: white;
            padding-top: 11px;
          }
        `}</style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
          <Link href="/" passHref>
             <span className="navbar-brand">Home</span>
            </Link>
          </NavItem>
          <NavItem className="ml-auto">
            {user ? (
              <h5>{user.username}</h5>
            ) : (
              <Link href="/register" passHref>
                <span className="nav-link">Sign up</span>
              </Link>
            )}
          </NavItem>
          <NavItem>
  {user ? (
    <a
      className="nav-link"
      href="/" 
      onClick={handleLogout} // Use the handleLogout function here
    >
      Logout
    </a>
  ) : (
    <Link href="/login" passHref>
      <span className="nav-link">Sign in</span>
    </Link>
  )}
</NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};


export default Layout;