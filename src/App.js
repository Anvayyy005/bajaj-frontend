import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import Dropdown from './Dropdown';

function App() {
  const [data, setData] = useState({});
  const [selectedOption, setSelectOption] = useState('all');
  const handleSubmit = async (jsonData) => {
    try{
      const response = await fetch('http://localhost:8080/bfhl',
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: jsonData}),
      });
      if(!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
    }catch(error){
      console.error('Fetch error:', error.message);
      alert('Error Fetching data: ' + error.message);
    }
  };

  const filteredData = () =>{
    switch(selectedOption){
      case 'alphabets':
        return {alphabets: data.alphabets};
      case 'numbers':
        return {numbers: data.numbers};
      case 'highest':
        return {highestLowerCaseAlphabet: data.highestLowerCaseAlphabet};
      default: 
        return data;
    }
  };
  return(
    <div className="App">
      <h1>Roll number - Your Roll Number Here</h1>
      <Form onSubmit={handleSubmit}/>
      <Dropdown
        options={[
          {label: 'All', value: 'all'},
          {label: 'Alphabets', value: 'alphabets'},
          {label: 'Numbers', value: 'numbers'},
          {label: 'Highest lowercase Alphabet', value: 'highest'}
        ]}
        onSelect={setSelectOption}
      />
      <pre>{JSON.stringify(filteredData(), null, 2)}</pre>
    </div>
  );
}

export default App;
