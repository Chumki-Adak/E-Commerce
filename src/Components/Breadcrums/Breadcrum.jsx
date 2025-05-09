import React from 'react'
import { FiChevronRight } from 'react-icons/fi'; 
import './Breadcrum.css';

const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
    Home <FiChevronRight /> Shop <FiChevronRight /> {product.category} <FiChevronRight /> {product.name}
  </div>
  )
}

export default Breadcrums