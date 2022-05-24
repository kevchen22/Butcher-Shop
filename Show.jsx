const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Show Product">
            <div>
                <p class="description">The {product.name}'s color is {product.color}.</p>
                <button><a href={'/products'}>Back</a></button>
                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show