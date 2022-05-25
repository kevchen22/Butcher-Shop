const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() {
        // Object Destructuring
        const { products } = this.props
        return (
            <DefaultLayout title="Index">
            <div>
                <nav>
                    <a href="/products/new">Create a New Product</a>
                </nav>
                <ul>
                    {
                        products.map(product => {
                            // console.log(product)
                            return (
                                <li key={product._id}>
                                    <p>The <a href={`/products/${product._id}`}>{product.name}'s</a> cut is {product.cut} and costs ${product.price} expiring on {product.expire}. Stock Remaining: {product.stock}</p>
                                    <img src={product.img} alt="" />
                                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE" />
                                    </form>
                                    <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                                    <hr></hr>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index