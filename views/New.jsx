const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
import Form from "react-bootstrap/Form";

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New Product">
            <>
            <form class="row g-2" action={`/products/`} method="POST">
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="name">Name:</label>
                    <input class="mb-2 form-control" type="text" id="name" name="name"/>
                    </div>
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="cut">Cut:</label>
                    <input class="mb-2 form-control" type="text" id="cut" name="cut" />
                    </div>
                    <div class="col-md-6">
                    <label class="mb-2 form-label" htmlFor="price">Price:</label>
                    <input class="mb-2 form-control" type="text" id="price" name="price" />
                    </div>
                    <div class="col-md-4">
                    <h6>Expiration Date:</h6>
                    <Form.Control type="date" name="expire" />
                    </div>
                    <div class="col-md-2">
                    <label class="mb-2 form-label" htmlFor="stock">Stock Remaining:</label>
                    <input class="mb-2 form-control" type="text" id="stock" name="stock" />
                    </div>
                    <label class="mb-2 form-label" htmlFor="img">Image URL:</label>
                    <input class="mb-2 form-control" type="text" id="img" name="img" />
                    <input class="mb-2 form-control" type="submit" value="Create New Product" />
                </form>
                <button><a href={'/products'}>Back</a></button>
            </>
            </DefaultLayout>
        )
    }
}

module.exports = New