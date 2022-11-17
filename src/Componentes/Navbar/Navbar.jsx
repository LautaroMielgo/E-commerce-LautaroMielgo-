import React from 'react'

import  CartWidget  from '../CartWidget/CartWidget'
import { Nav } from './Nav'
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  const categories = [
    { id: 0, title: "jordan", route: "/category/jordan" },
    { id: 1, title: "nike", route: "/category/nike" },
    { id: 2, title: "adiddas", route: "/category/adiddas" },
    { id: 3, title: "under", route: "/category/under" },
  ];
 
 
  return (
    <header style={styles.container}>
      <div style={styles.branchContainer}>
        <Link style={styles.links} to="/">
        <h1 style={styles.h1}>ZAPATURRAS {name}</h1>
          
        </Link>
      </div>
      <div style={styles.links}>
        <Nav  categories={categories} />
        <Link style={styles.links} to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  branchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  links: {
    display: "flex",
    color: '#f8f8ff',
    textDecoration: 'none',
  },
  navv: {
    color: '#1EB88D',
  },
    
    
  imagen: {
    width: "60%",
    alignItems: "center",
  },
  h1: {
    color: '#f8f8ff',
  }
};
    




export default Navbar