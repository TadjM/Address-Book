import React from 'react';

const person = (props) => {
    return <p> <div>{props.FirstName}</div>
               <div>{props.LastName}</div>
               <div>{props.Birthday}</div>
               <div>{props.Telephone}</div>
            </p>
}   

export default person;
