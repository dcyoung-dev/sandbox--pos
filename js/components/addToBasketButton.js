import React from 'react';

export class AddToBasketButton extends React.Component {
    render() {
        const {item, addToBasket} = this.props

        const options = {
            onClick: (e) => addToBasket(item, e),
            type: "button"
        }

        return React.createElement(
            "button",
            options,
            "Add to basket"
        )
    }
}