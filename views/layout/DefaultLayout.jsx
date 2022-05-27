const React = require('react')


class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
                </head>
                <body class="text-bg-secondary p-3 m-0 container">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout