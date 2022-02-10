import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    
    const [thingsArray, setThingsArray] = React.useState(["Things 1","Things 2"]);     
    
    function addItem() {
        // Build from scratch :)
        setThingsArray(prevThingsArray => {
                return [...prevThingsArray, `Things ${prevThingsArray.length + 1}`];   
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));