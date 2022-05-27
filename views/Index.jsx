const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() {
        // Object Destructuring
        const { products } = this.props
        return (
            <DefaultLayout title="FLYING PIG BUTCHER SHOP">
                <div>
                    <div class="container sticky-top">
                        <nav class="navbar navbar-expand-sm navbar-light bg-light">
                            <a href="/products/new">Create a New Product</a>
                        </nav>
                    </div>
                    <ul class="d-flex flex-column mb-3 flex-wrap" style={{height:"100vh"}}>
                        {
                            products.map(product => {
                                // console.log(product)
                                return (
                                    <li key={product._id} class="d-flex p-3 bg-info m-1 rounded-3 justify-content-around">
                                       <div class="d-flex flex-column">
                                        <p>Product: <a href={`/products/${product._id}`}>{product.name}</a></p>
                                        <p>Cut: {product.cut}</p>
                                        <p>Price: ${product.price}</p> 
                                        <p>Expiration: {product.expire}</p>
                                        <p>Stock Remaining: {product.stock}</p>   
                                        </div>
                                        <a href={`/products/${product._id}`}> <img src={product.img} alt="" /></a>
                                        <div class="d-flex align-items-center">
                                        <form action={`/products/${product._id}?_method=DELETE`} method="POST" class="form-inline">
                                            <button class="m-2 rounded-3" type="submit">DELETE</button> 
                                        </form>
                                        <button class="m-2 rounded-3"><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
                                        <button class="m-2 rounded-3"><a href={`/products/${product._id}`}>{`READY TO EAT? BUY ${product.name} NOW!`}</a></button>
                                        </div>
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