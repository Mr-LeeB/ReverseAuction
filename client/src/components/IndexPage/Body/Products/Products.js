import React, { Component } from 'react'
import StyleTotal from './cssProducts'

export default class Products extends Component {

    render_Products = () => {
        let products = []
        for (let i = 0; i < 18; i++) {
            products.push(
                <div className="item">
                    <img src='image/index/Product/product.png' alt='product' />
                    <div className="title">
                        Men's Nike Air Force 1 High Boot Black Anthracite Size 8-14 DA0418-001 New
                    </div>
                    <div className="star">
                        <span className="icon">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <span className="number">(4)
                        </span>
                    </div>
                    <div className="price">
                        $165.00
                    </div>
                </div>
            )
        }
        return products;
    }

    render() {
        return (
            <StyleTotal>
            <div className="products">
                {this.render_Products()}
            </div>
            </StyleTotal>
        )
    }
}
