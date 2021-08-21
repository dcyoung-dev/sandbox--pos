import {Component, createElement} from 'react';
import {MenuItem} from "./menuItem.js";

export class Menu extends Component {
    state = {
        menuItems: []
    }

    get #menuItems() {
        return this.state.menuItems
    }

    async componentDidMount() {
        const menuItems = await this.getMenuItems()
        this.setState({
            menuItems: menuItems
        })
    }

    getMenuItems() {
        return new Promise((resolve) => {
            const menuItems = [
                {name: "Soup"},
                {name: "Sandwich"},
                {name: "Cola"},
            ]
            resolve(menuItems)
        })
    }

    get #addToBasket() {
        const {addToBasket} = this.props
        return addToBasket
    }

    get #menuItemElements() {
        return this.#menuItems.map(item => {
            return createElement(MenuItem, {item: item, addToBasket: this.#addToBasket})
        })
    }

    render() {
        return createElement('div', {},
            [
                createElement("h2", {}, "Menu"),
                createElement("ul", {}, this.#menuItemElements)
            ]
        )
    }
}