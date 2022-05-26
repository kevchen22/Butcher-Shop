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
                <ul class = "container">
                    {
                        products.map(product => {
                            // console.log(product)
                            return (
                                <li key={product._id} class="row">
                                    <p class="col">The <a href={`/products/${product._id}`}>{product.name}'s</a> cut is {product.cut} and costs ${product.price}. Expires on {product.expire}.
                                    Stock Remaining: {product.stock}</p>
                                    <a href={`/products/${product._id}`} class="col-6"> <img src={product.img} alt="" /></a>
                                    <form action={`/products/${product._id}?_method=DELETE`} class="col" method="POST">
                                        <input type="submit" value="DELETE" />
                                    </form>
                                    <button class="col"><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
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