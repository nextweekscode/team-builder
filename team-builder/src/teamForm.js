import React from 'react'

export default function TeamForm(props){

    const {} = props

    const onChange = evt => {

    }

    const onSubmit = evt => {

    }







    return (
        <form className="form-container" onSumbit={{}}>
            <div className='form-group container'>
                <h2>Add a Team Member</h2>
            <button disabled={{}}>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>Info</h4>
        
        
        <label>Name:&nbsp;
            <input 
            onChange={{}}
            value={{}}
            name="name"
            placeholder="please enter name"
            maxLength="10"
            type="text"/>
        </label>

        <label>Email:&nbsp;
            <input 
            onChange={{}}
            value={{}}
            name="email"
            placeholder="please enter email"
            maxLength="15"
            type="email"/>
        </label>

        <label>Role:&nbsp;
            <select onChange={{}} value={{}} name="role">
                <option value="">--Select A Role--</option>
                <option value="backend">BackEnd Developer</option>
                <option value="frontend">FrontEnd Developer</option>
                <option value="desinger">Desinger</option>
            </select>
        </label>
    </div>
</form>

    )
}