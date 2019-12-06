import React from 'react';

function returnString() {
  
  console.log('bar')

  // if (false) {
  //   return 'foo'
  // }
}

function Button(props) {
  return (
    <>
      {false}
      {null}
      {undefined}
      {props.label && 'Uma coisa louca'}
      <br />
      {returnString()}
      <br />
      <button onClick={props.click} className="button" type="button">{props.title}</button>
    </>
  )
}

export default Button;
