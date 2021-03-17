import React, {useState} from 'react';

const TodoForm = (props) => {
    const [item, setItem] = useState('');
    const handleSubmit = async (event) => {
        console.log('here');
      event.preventDefault(); //Prevents react from updating the page immediately after the submit action occurs
      props.onSubmit(item) //Sends the data to the onSubmit prop
    }
        return (
            <>
            <form onSubmit={handleSubmit} className='form-group text-center'>
                <input
                    className=''
                    type="text"
                    value={item}
                    onChange={event => setItem(event.target.value)} //Allows the userInput to be updated
                    placeholder="Enter New Todo Item"
                    required
                />
                <button className='btn btn-success ml-2 btn-sm mb-1'>Add</button>
            </form>
            </>
      );
  }

export default TodoForm;