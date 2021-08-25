import {Component, createElement} from 'react';
import {MenuItem} from "./menuItem.js";

export class Product {
    #data = {}

    get name() {
        return this.#data.name
    }

    get price() {
        return this.#data.price
    }

    constructor(props) {
        const defaults = {name: "", price: 0}
        this.#data = {
            ...defaults,
            ...props
        }
    }
}

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
                new Product({name: "Soup", price: 250}),
                new Product({name: "Sandwich", price: 320}),
                new Product({name: "Cola", price: 100}),
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