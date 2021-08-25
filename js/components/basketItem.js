import React from 'react';

export class BasketItem extends React.Component {
    render() {
        const {item} = this.props
        const itemName = item.name

        return React.createElement("li", {}, itemName);
    }
}