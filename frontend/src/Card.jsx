import React from 'react'
import './card.css'
function Card() {
  return (
 



    <div className="card">
    <div className="container">
      <div className="cloud front">
        <span className="left-front"></span>
        <span className="right-front"></span>
      </div>
      <span className="sun sunshine"></span>
      <span className="sun"></span>
      <div className="cloud back">
        <span className="left-back"></span>
        <span className="right-back"></span>
      </div>
    </div>

    <div className="card-header">
      <span>Messadine, Susah<br />Tunisia</span>
      <span>March 13</span>
    </div>

    <span className="temp">23°</span>

    <div className="temp-scale">
      <span>Celcius</span>
    </div>
  </div>
  )
}

export default Card



// import React from 'react'
// import './test.css';
// function Test() {
//   return (
//     <div style={{backgroundColor:'blueviolet'}}>


//     <div className="container">
//       <div className="image"></div>
//       <div className="description">
//         <span>PERFUME</span>
//         <h1>Gabrielle Essence Eau De Parfum</h1>
//         <p>
//           A floral, solar and voluptuous interpretation composed by Olivier
//           Polge, Perfumer-Creator for the House of CHANEL.
//         </p>

//         <section className="price">
//           <section className="current">$149.99</section>
//           <strike>$169.99</strike>
//         </section>
//         <br />
//         <button className="cart-button">
//           <span>
//             <img src='data:image/jpeg;base64,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' alt="" /> Add to Cart
//           </span>
//         </button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Test