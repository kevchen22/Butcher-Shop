const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
import Form from "react-bootstrap/Form";

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New Product">
            <>
                <form action="/products" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="cut">Cut:</label>
                    <input type="text" id="cut" name="cut"/>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" />
                    <h3>EXPIRATION DATE:</h3>
                    <Form.Control type="date" name="expire" />      
                    <label htmlFor="stock">Stock Remaining:</label>
                    <input type="text" id="stock" name="stock"/>
                    <label htmlFor="img">Image URL:</label>
                    <input type="text" id="img" name="img" />
                    <input type="submit" value="Create Product"/>
                </form>
            </>
            </DefaultLayout>
        )
    }
}

module.exports = New