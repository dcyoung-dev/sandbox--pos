import React from 'react';
import {Basket} from "./basket.js";
import {Menu} from "./menu.js";

export class POS extends React.Component {
    state = {
        basket: {
            items: [],
            subTotal: 0
        }
    };

    constructor(props) {
        super(props);
        this.addToBasket = this.addToBasket.bind(this)
    }

    addToBasket(item) {
        const {items: basketItems} = this.state.basket;
        const items = [
            ...basketItems,
            item
        ]
        const subTotal = this.calculateSubTotal(items)

        this.setState({
            basket: {
                items,
                subTotal
            }
        })
    }

    render() {
        const basket = React.createElement(
            Basket,
            {basket: this.state.basket}
        )

        const menu = React.createElement(
            Menu,
            {addToBasket: this.addToBasket}
        )

        return React.createElement('div', {}, [
            menu,
            basket
        ]);
    }

    calculateSubTotal(items) {
        return items.reduce((subTotal, item) => {
            return subTotal + item.price
        }, 0)
    }
}