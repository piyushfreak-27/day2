import "./product";
import React from 'react'
var tt=0;

function Cart() {
  return (
    <div>
        <h5>Add to Your Cart</h5>
        <button onClick={total}>Check Out</button>
        <section id="cartsection"></section>
    </div>
  )
}
function total(){
    const f = document.createElement("h4");
    const sec = document.getElementById('cartsection');
    f.append("Thank You,Come Again");
    f.append(" Total Amount is",tt);
    sec.append(f);
    console.log(tt);
}
var adder = (x,y) => () =>
{
    var v = document.getElementById(x).value;
    console.log(v);
    console.log(y);
    var sec = document.getElementById('cartsection');
    const p = document.createElement("p");
    p.append(y," ",v);
    sec.append(p);
    tt = parseInt(tt) + parseInt(v);
    console.log(tt);
}
export {Cart,adder}