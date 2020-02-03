import React from 'react'
import CurrencyDisplay from './CurrencyDisplay'


const withCurrency = (BaseComponent) => (
    class Currency extends React.Component{
        constructor(){
            super()
            this.state = {
                currencyChosen: false,
                selectedCurrency: 'Select Currency',
                amount: 0
            }
        }

        increment = () => {
            this.setState({
                amount: this.state.amount + 1
            })
        }
        decrement = () => {
            this.setState({
                amount: this.state.amount - 1
            })
        }
        currencyChange = (event) => {
            let selectedValue  = event.target.value 
            this.setState({
                selectedCurrency: selectedValue, currencyChosen: selectedValue === 'Select Currency' ? false : true
            })
        }

        

        render(){
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
                { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
            ]

            const currencyOptions = currencyData.map((ele, i) => <option key={ele.id} value={i} >{ele.name}</option>)

            const currency = currencyData[this.state.selectedCurrency]

            return(
                <div>
                    <select onChange={this.currencyChange} value={this.state.selectedCurrency} >
                        <option value={'Select Currency'}>Select Currency</option>
                        {currencyOptions}
                    </select>
                    <div>
                        <button className='add' onClick={this.increment} disabled={!this.state.currencyChosen} >+</button>
                        <button className='minus' onClick={this.decrement} disabled={!this.state.currencyChosen || this.state.amount === 0}  >-</button>
                    </div>
                    {this.state.selectedCurrency === 'Select Currency' ? <p>Select A Currency</p> : <BaseComponent currency={currency} amount={this.state.amount} />}
                </div>
            )
        }
    }
)

const ExchangedCurrency = withCurrency(CurrencyDisplay)

export default ExchangedCurrency

