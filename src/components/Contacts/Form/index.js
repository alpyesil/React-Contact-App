import { useState, useEffect } from 'react'


const initialFormValues = {fullName: "", phoneNumber: "" }

function Form({ setContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    // Eğer Form yollandıysa içini boşaltma
    setForm(initialFormValues);
  }, [contacts])

  const onSumbit = (e) => {
    e.preventDefault();

    if(form.fullName === '' || form.phoneNumber === '')
    {
      return false;
    }else
    {
      setContacts([...contacts, form])
      // Uzun yoldan form içini boşaltma
      // setForm({ fullName: '', phoneNumber: ''});
      // Kısa yoldan form içini boşaltma
      // setForm(initialFormValues);

      console.log(form);
    };
  }

  return (
    <form onSubmit={onSumbit}>
      <input 
      name="fullName" 
      placeholder='Full Name' 
      onChange={onChangeInput}
      value={form.fullName}
      />
      <br/>
      <input 
      name="phoneNumber" 
      placeholder='Phone Number' 
      onChange={onChangeInput}
      value={form.phoneNumber}
      />
      <br/>
      <div  className='btn'>
        <button 
         >Add
        </button>
      </div>  
    </form>
  )
}

export default Form;