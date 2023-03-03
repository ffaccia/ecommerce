import React, { useState, useReducer } from "react"

export const INITIAL_STATE = []

export const ACTIONS = {
    NEW: "add-toto",
    TOGGLE: "toggle-todo",
    DELETE: "delete-todo"
}

const makeReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.NEW:
            return [...state, {
                id: Date.now(), name: action.payload.name, complete: false
            }]
        
        case ACTIONS.TOGGLE:
            console.log("entrato dentro toggle ", action.payload.id)
            return state.map((todo) => {
                return {...todo, 
                        complete: todo.id === action.payload.id ? !todo.complete : todo.complete
                    }
            })
        
        case ACTIONS.DELETE:
            return state.filter(todo => {
                return todo.id !== action.payload.id
            })    
    }

}
   
export const Todo = ({todo, key, dispatch, actions}) => {
//export const Todo = (props) => {
    console.log(actions)
    const handleToggle = () => {
        console.log("dispacced ", todo.id)
        dispatch({type: actions.toggle, payload: {id: todo.id}})
    }

    const handleDelete = () => {
        console.log("dispacceddel ", todo.id)
        dispatch({type: actions.delete, payload: {id: todo.id}})
    }

    return (
        <>
            <div>
                <span>
                    <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                        {todo.name}
                    </span>
                    <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                        {todo.complete ? "Complete" : "Not Complete"}
                    </span>
                    <button onClick={e => handleToggle(e.target.value)}>Toggle</button>
                    <button onClick={e => handleDelete(e.target.value)}>Delete</button>
                </span>
            </div>
        </>
    )
}


export const TagReducer = () => {

    const [state, dispatch] = useReducer(makeReducer, INITIAL_STATE)
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.NEW, payload: { name: name}})
        setName('')
        console.log("handleSubit called")
    }
    
    console.log(state)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {state.map((todo, i) => {
                return <Todo todo={todo} key={i} 
                             dispatch={dispatch} 
                             actions={{toggle:ACTIONS.TOGGLE, delete:ACTIONS.DELETE}}/>
            })
                
            }
        </>
    )
} 


