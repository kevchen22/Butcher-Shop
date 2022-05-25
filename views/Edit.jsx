const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit">
                <h1>{product.name.toUpperCase()} Edit Page</h1>
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={product.name}/>
                    <label htmlFor="cut">Cut:</label>
                    <input type="text" id="cut" name="cut" defaultValue={product.cut}/>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={product.price}/>
                    <label htmlFor="expire">Expiry Date:</label>
                    <input type="text" id="expire" name="expire" defaultValue={product.expire}/>
                    <label htmlFor="stock">Stock Remaining:</label>
                    <input type="text" id="stock" name="stock" defaultValue={product.stock}/>
                    <label htmlFor="img">Image URL:</label>
                    <input type="text" id="img" name="img" defaultValue={product.img}/>
                    <input type="submit" value="Edit Product"/>
                </form>
                <button><a href={'/products'}>Back</a></button>
            </DefaultLayout>
        )
    }
}

module.exports = Edit