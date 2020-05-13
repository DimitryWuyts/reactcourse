import React from 'react'
import ReactDOM from 'react-dom'

function MyApp() {
    return (
        <div>
            <h1>Dimitry</h1>
            <p>i am dimitry im trying react</p>
            <ol>
                <li>greece</li>
                <li>spain</li>
                <li>italy</li>
            </ol>
        </div>
    )


}
ReactDOM.render(<MyApp/>, document.getElementById('root'))