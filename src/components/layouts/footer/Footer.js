import React from 'react'
import { useProductContext } from '../../../context/Products';
import "./footer.css"

function Footer() {
  const [{ productsData }] = useProductContext([]);

  return (
    <div className='footer'>
      <h6>Footer</h6>
      <h6>WE HAVE <span className='product-count'>{productsData.length}</span> REGISTERED PRODUCTS IN OUR WEB PAGE</h6>
    </div>
  )
}

export default Footer