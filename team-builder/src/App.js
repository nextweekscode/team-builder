import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import TeamForm from './teamForm'
import Member from './member'
import './App.css';

const initialMembersList = [
  {
    id: uuid(),
    name: 'Ashton',
    email: 'ashton@ashton.com',
    role: 'frontend',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMembersList})
}

const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id:uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember})
}



 function App() {
  const [members, setMembers] = useState([]) // starts as empty array

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const member = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    

    fakeAxiosPost('fake.com', member)
      .then(res => {
        setMembers([...members, res.data])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com')
    .then(res => setMembers(res.data))
  }, [])



return (
    <div className="container">
      <header><h1>Members App</h1></header>
      <TeamForm  
      values={formValues}
      update={updateForm}
      submit={submitForm}/>

      {members.map(member => {
        return (
          <Member key={member.id} details={member} />
        )
      })}
     
    </div>
  );
}

export default App;
