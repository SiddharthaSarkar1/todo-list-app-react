import React, { useState } from 'react'
import ToDoList from './ToDoList';

const App = () => {

    const [inputList, setInputList] = useState(" ");

    const [items, setItems] = useState([]); //here we are passondg an array it means items also become array

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList('');//emptying the input field
    }

    const deleteItems = (id) => {
        //console.log("Deleted");
        //console.log(id);

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {
                        items.map( (itemval, index) => {
                            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/>
                        } )
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;