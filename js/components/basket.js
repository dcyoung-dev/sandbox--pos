import React from 'react';
import {BasketItem} from "./basketItem.js";

export class Basket extends React.Component {
    render() {
        const {basket} = this.props
        const {items: basketItems, subTotal: subTotalPennies} = basket

        const subTotal = (subTotalPennies / 100).toFixed(2)

        return React.createElement('div', {},
            [
                React.createElement("h2", {}, "Basket"),
                React.createElement("h3", {}, `Subtotal: £${subTotal}`),
                React.createElement("ul", {}, basketItems.map(item => {
                    return React.createElement(BasketItem, {item: item})
                }))
            ]
        )
    }
}