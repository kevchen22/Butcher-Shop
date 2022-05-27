const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
import Form from "react-bootstrap/Form";

class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit Page">
                <form class="row g-2" action={`/products/${product._id}?_method=PUT`} method="POST">
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="name">Name:</label>
                    <input class="mb-2 form-control" type="text" id="name" name="name" defaultValue={product.name} />
                    </div>
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="cut">Cut:</label>
                    <input class="mb-2 form-control" type="text" id="cut" name="cut" defaultValue={product.cut} />
                    </div>
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="price">Price:</label>
                    <input class="mb-2 form-control" type="text" id="price" name="price" defaultValue={product.price} />
                    </div>
                    <div class="col-md-4">
                    <h6>Expiration Date:</h6>
                    <Form.Control type="date" name="expire" defaultValue={product.expire} />
                    </div>
                    <div class="col-md-2">
                    <label class="mb-2 form-label" htmlFor="stock">Stock Remaining:</label>
                    <input class="mb-2 form-control" type="text" id="stock" name="stock" defaultValue={product.stock} />
                    </div>
                    <label class="mb-2 form-label" htmlFor="img">Image URL:</label>
                    <input class="mb-2 form-control" type="text" id="img" name="img" defaultValue={product.img} />
                    <input class="mb-2 form-control" type="submit" value="Edit Product" />
                </form>
                <button><a href={'/products'}>Back</a></button>
                <form action={`/products/${product._id}?_method=DELETE`} class="col" method="POST">
                    <input type="submit" value="DELETE" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit