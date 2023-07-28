import {useState, useEffect} from 'react';
import './style.css';
import List from './List';
import Form from './Form';
function Contacts() {

    const[contacts, setContacts] = useState([
      {
        fullname: 'edi',
        phone_number: "1234"
      },
      {
        fullname: 'inci',
        phone_number:"3456"
      },
      {
        fullname:'ebrar',
        phone_number: "43567"
      }
    
    
    ]);




    useEffect(()=> {
        console.log(contacts);
    }, [contacts])



  return (
    <div id="container">
      <h1>contacts</h1>
        <List contacts={contacts}/>
        <Form addContact ={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;