import React from 'react';
import {MenuItem} from "./menuItem.js";

export class Menu extends React.Component {
    render() {
        const {menuItems, addToBasket} = this.props

        return React.createElement('div', {},
            [
                React.createElement("h2", {}, "Menu"),
                React.createElement("ul", {}, menuItems.map(item => {
                    return React.createElement(MenuItem, {item: item, addToBasket: addToBasket})
                }))
            ]
        )
    }
}