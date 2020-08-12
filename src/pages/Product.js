import React, {Component} from 'react';

class Product extends Component {
    state = {
        product: {},
    }

    products = {
        bicycle: {
            id: 1,
            name: "Bicycle",
            price: 30,
            quantity: 15,
            desc: "Bicycle is Good"
        },
        TV: {
            id: 2,
            name: "TV",
            price: 40,
            quantity: 16,
            desc: "TV is good"
        },
        pencil: {
            id: 3,
            name: "Pencil",
            price: 50,
            quantity: 17,
            desc: "Pencil is good"
        },
    }

    componentDidMount() {
        const id = this.props.match.params.id
       Object.values(this.products).forEach(product =>{if(product.id == id) this.setState({product:product,})})
    }

    render() {
        return (
            <div className="product">
                <p><strong>Product Details: </strong></p>
                <p>Name: {this.state.product.name}</p>
                <p>Id: {this.state.product.id}</p>
                <p>Price: {this.state.product.price}</p>
                <p>Quantity: {this.state.product.quantity}</p>
                <p>Desc: {this.state.product.desc}</p>
                <p>URL: /products/{this.state.product.id}</p>
            </div>
        )
    }
}

export default Product;