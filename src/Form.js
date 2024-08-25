import React, { useState } from 'react';

function Form({onSubmit}){
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const jsonData = JSON.parse(input);
            onSubmit(jsonData);
        }catch(error){
            alert('Invalid JSON');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <textarea value={input}onChange={(e)=> setInput(e.target.value)} placeholder='Enter JSON' rows="4" cols="50"/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;