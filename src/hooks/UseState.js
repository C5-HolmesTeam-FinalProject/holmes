import React, { useEffect } from 'react';

function Datos() {
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch(' https://cors-anywhere.herokuapp.com/https://api-holmes.herokuapp.com/users');
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return <></>;
}

export default Datos;
