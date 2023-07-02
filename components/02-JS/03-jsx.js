import React from 'react'

const Jsx3 = () => {
    const user ={
        name: "John",
        surname: "Doe",
        age : 25,
        email: "john@example.com",
        occupation: "Godfather of the developers"
    };
    const error = true;
    const {name,age}= user;
  return (
    <div>
        {
            age >= 18 && <h1>Bu icerik 18 yasindan buyuklere ozeldir</h1>
        }
        {
            age > 17 || <h1>Bu icerik 17 yasindan kucuklere ozeldir</h1>
        }
        { 
        error && <p>burda bir hata bulunmaktadir</p> 
        }
    </div> 
    ) }

export default Jsx3