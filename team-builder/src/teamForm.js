import React from 'react'

export default function TeamForm(props){

    const { values, update, submit} = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        debugger

    }







    return (
        <form className="form-container">
            <div className='form-group container'>
                <h2>Add a Team Member</h2>
            
            </div>

            <div className='form-group inputs'>
                <h4>Info</h4>
        
        
        <label>Name:&nbsp;
            <input 
            onChange={onChange}
            value={values.name}
            name="name"
            placeholder="please enter name"
            maxLength="10"
            type="text"/>
        </label>

        <label>Email:&nbsp;
            <input 
            onChange={onChange}
            value={values.email}
            name="email"
            placeholder="please enter email"
            maxLength="15"
            type="email"/>
        </label>

        <label>Role:&nbsp;
            <select onChange={onChange} value={values.role} name="role">
                <option value="">--Select A Role--</option>
                <option value="backend">BackEnd Developer</option>
                <option value="frontend">FrontEnd Developer</option>
                <option value="desinger">Desinger</option>
            </select>
        </label>
        <button onClick={onSubmit} disabled={ !values.name || !values.email || !values.role ? true : false }>Submit</button>
    </div>
</form>

    )
}