import React from 'react';
import {Basket} from "./basket.js";
import {Menu} from "./menu.js";

export class POS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {name: "Soup"},
                {name: "Sandwich"},
                {name: "Cola"},
            ],
            basket: [
                {name: "Sample Item"}
            ]
        };

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
            {menuItems: this.state.menuItems, addToBasket: this.addToBasket}
        )

        return React.createElement('div', {}, [
            menu,
            basket
        ]);
    }
}