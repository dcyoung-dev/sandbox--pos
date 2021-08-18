import React from 'react';
import {AddToBasketButton} from "./addToBasketButton.js";

export class MenuItem extends React.Component {
    get item() {
        return this.props.item
    }

    get addToBasket() {
        return this.props.addToBasket
    }

    render() {
        const {name: itemName} = this.item

        const addToBasketButton = React.createElement(
            AddToBasketButton,
            {item: this.item, addToBasket: this.addToBasket}
        )

        const titleElement = React.createElement(
            "span",
            {},
            itemName
        )

        return React.createElement('li', {}, [
            titleElement,
            addToBasketButton
        ]);
    }
}