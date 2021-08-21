import React from 'react';
import {Basket} from "./basket.js";
import {Menu} from "./menu.js";

export class POS extends React.Component {
    state = {
        basket: []
    };

    constructor(props) {
        super(props);
        this.addToBasket = this.addToBasket.bind(this)
    }

    addToBasket(item) {
        const basket = this.state.basket;
        this.setState({
            basket: [
                ...basket,
                item
            ]
        })
    }

    render() {
        const basket = React.createElement(
            Basket,
            {basketItems: this.state.basket}
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
}