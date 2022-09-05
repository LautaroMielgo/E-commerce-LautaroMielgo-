import React from 'react'
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

 
 const Navbar = () =>  {
  return ( 
    <header style={styles.container}> 
      <img style={styles.imagen} src={logo} alt="logo " />
      <h1>titulo de la tienda</h1>
      <nav>
        <a style={styles.links} href="">categoria1</a>
        <a style={styles.links} href="">categoria2</a>
        <a style={styles.links} href="">categoria3</a>
      </nav>
      <ShoppingCartIcon/>
    </header>
  )
}

const styles = {
  container:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  imagen:{
    width: '10%'
  },
  links:{
    padding: 10
  }
 
}



export default Navbar