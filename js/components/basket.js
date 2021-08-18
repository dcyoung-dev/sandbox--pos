import React from 'react';
import {BasketItem} from "./basketItem.js";

export class Basket extends React.Component {
    render() {
        const {basketItems} = this.props

        return React.createElement('div', {},
            [
                React.createElement("h2", {}, "Basket"),
                React.createElement("ul", {}, basketItems.map(item => {
                    return React.createElement(BasketItem, {item: item})
                }))
            ]
        )
    }
}