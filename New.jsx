const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New Product">
            <>
                <form action="/products" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/>
                    <input type="submit" value="Create Product"/>
                </form>
            </>
            </DefaultLayout>
        )
    }
}

module.exports = New