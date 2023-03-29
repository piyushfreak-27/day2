
import React from 'react'
import {adder} from './footer';

export default function Section() {
  return (
    <div>
        <ul>
            <h4>Coffee</h4>
            <li>
                Hot Coffee
                <button id='add1' value={60} onClick={adder("add1","Hot Coffee")}>Add It</button>
            </li>
            <li>
                cold Coffee
                <button id='add2' value={60} onClick={adder("add2","cold Coffee")}>Add It</button>
            </li>
            <h4>Tea</h4>
            <li>
                Hot Tea
                <button id='add3' value={60} onClick={adder("add3","Hot Tea")}>Add It</button>
            </li>
            <li>
                Masala Tea
                <button id='add4' value={60} onClick={adder("add4","Masala Tea")}>Add It</button>
            </li>
        </ul>
    </div>
  )
}
