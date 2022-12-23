import React, { Component } from 'react'
import StyleTotal from './cssProductList'

export default class ProductList extends Component {

    renderProductList() {
        let html = [];
        for (let i = 0; i < 32; i++) {
            html.push(
                <div className="card text-left">
                    <img className="card-img-top img-fluid" src="image/CategoryPage/product.jpg" alt="product" />
                    <div className="card-body">
                        <h5 className="card-title">John Mayer x Hodinkee x Casio G-Shock Ref. 6900-PT1 Limited Edition NEW Blue</h5>
                        <p className='star'>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                        </p>
                        <p className="card-text">
                            <span className="price">1,500,000 VND</span>
                            <span className="bid">5 bids</span>
                        </p>
                        <p className='time'>
                            46m 49s
                        </p>
                    </div>
                </div>
            );
        }
        return html;
    }

    render() {
        return (
            <StyleTotal>
                <div className='productList'>
                    {this.renderProductList()}
                </div>
            </StyleTotal>
        )
    }
}
