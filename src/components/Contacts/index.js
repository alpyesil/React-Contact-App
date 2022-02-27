import { useState, useEffect } from 'react'
import List from './List';
import Form from './Form';
import "./style.css"

function Contacts() {
    const [contacts, setContacts] = useState([ 
        {
            fullName: "Alp",
            phoneNumber: "5555 414 41 41"
        },
        {
            fullName: "Mehmet",
            phoneNumber: "5555 414 41 42"
        },
        {
            fullName: "Sefa",
            phoneNumber: "5555 414 41 43"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

  return (   
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form setContacts={setContacts} contacts={contacts}/>
    </div>

  )
}

export default Contacts;