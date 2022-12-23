import React, { Component } from 'react'
import Fillter from './Fillter/Fillter'
import ProductList from './ProductList/ProductList'


export default class Body extends Component {
  render() {
    return (
      <div>
        <Fillter/>
        <ProductList/>
      </div>
    )
  }
}
