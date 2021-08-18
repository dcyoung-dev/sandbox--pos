import React from 'react';

export class BasketItem extends React.Component {
    render() {
        const {item} = this.props
        const {name: itemName} = item

        return React.createElement("li", {}, itemName);
    }
}