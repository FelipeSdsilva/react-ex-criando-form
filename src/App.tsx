import React, { useState } from "react";

const App = () => {
  
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const lastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={nameChange} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={lastNameChange} />
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={ageChange} />
      </div>

      <hr />

      Olá {`${name} ${lastName}`}, tudo bem?<br />
      Você tem {age} anos.
    </div>
  );
}

export default App;