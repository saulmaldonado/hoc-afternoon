import React from 'react'

export default function CurrencyDisplay(props){
    return(
        <p>
        US Dollar ${props.amount} - {props.currency.name}{' '}
		{props.currency.symbol}
		{props.amount * props.currency.rate}
        </p>
    )
}