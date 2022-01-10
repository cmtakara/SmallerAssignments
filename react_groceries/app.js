const itemList = [
    {
        item: 'bread',
        brand: 'generic',
        units: 'loaves',
        quantity: 2,
        isPurchased: true
    }, 
    {
        item: 'peanut butter',
        brand: 'Jif',
        units: 'ounces',
        quantity: 12,
        isPurchased: false
    }, 
    {
        item: 'strawberry jelly',
        brand: 'Smuckers',
        units: 'ounces',
        quantity: 12,
        isPurchased: false
    }
]

class App extends React.Component {
    state = {
        items: itemList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    handleChange = (event) => {
    // console.log(event.target.value);
    
    // Correct way of updating
    // don't forget the curly braces b/c it's java
    // event.target.id allows us to use the id we specified in the form to make our handleChange dynamic
    this.setState({

        [event.target.id]: event.target.value
    })
}


handleSubmit = e => {
    e.preventDefault()
    const newItem = {
        item: this.state.item,
        brand: this.state.brand,
        units: this.state.units,
        quantity: this.state.quantity, 
        isPurchased: this.state.isPurchased
    }

    console.log(newItem)

    this.setState({
        items: [newItem, ...this.state.items], 
        item: '',
        brand: '',
        units: '', 
        quantity: 0,
        isPurchased: true
    })
}

    render () {
        // console.table(itemList);
        return (
            <div>
                <h1>Groceries</h1>
                <div className = 'addList'>
                <h2>Add items to your list</h2>
                <form onSubmit={this.handleSubmit}>
                            <label htmlFor='item'>Item:</label>
                            <input id='item' type='text' value={this.state.item} onChange={this.handleChange} /><br></br>
                            <label htmlFor='brand'>Brand:</label>
                            <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} /><br></br>
                            <label htmlFor='units'>Units:</label>
                            <input id='units' type='text' value={this.state.units} onChange={this.handleChange} /><br></br>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input id='quantity' type='number' value={this.state.quantity} onChange={this.handleChange} /><br></br>
                            <input type='submit' />
                </form>
                </div>

                <div className='existingList'>
                    <div>
                <h2>Current List</h2>
                <ul>
                {
                        this.state.items.map(listItem => {
                            return (
                                <li>
                                    {listItem.item} {listItem.quantity} {listItem.units}
                                    
                                </li> 

                                // console.log(listItem)
                                // {
                                //     // listItem.isPurchased
                                //     // ?
                                //     // <li>{listItem.item} {listItem.quantity} {listItem.units}</li> 
                                //     // : ''
                                // }
                            )
                        })
                    }
                </ul>
                </div>

                <div>
                <h2>Purchased </h2>
                <ul className='boughtList'>
                    {
                        this.state.items.map(listItem => {
                            console.log(listItem);
                            console.log(listItem.isPurchased);
                            return (
                                <p>
                                    {
                                        listItem.isPurchased
                                        ? <p> {listItem.item} </p>
                                        : null
                                    }
                                    {/* {listItem.item} {listItem.quantity} {listItem.units} */}
                                </p> 
                            )
                        })
                    }
                </ul>
                </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)