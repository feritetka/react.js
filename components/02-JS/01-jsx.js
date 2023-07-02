const Jsx1 = () => {
    const name = "John Doe";

    const user = {
       Name: 'Ramazan',
        age: 30,
    };

    return(
        <>
        <p>
            Butun JSX kodlari bir element icinde olmalidir.
        </p>
        <p>
            Merhaba {name}
        </p>
        <p>ramazan gottur</p>
       
        <p>
            Kullanici Ad: {user.Name}
        </p>
        <p>
            Yasi: {user.age}
        </p>
        </>
    )
};
export default Jsx1;