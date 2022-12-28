import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <center>  <h1>Car Dekho</h1></center>

    
       

        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        {/* <a href="#/signin"> SignIn</a> */}
      </div>
    </header>
  );
}

