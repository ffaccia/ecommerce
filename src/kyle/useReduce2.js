import React, { useState, useReducer } from "react"

const INITIAL_STATE = []
const ACTIONS = {
    ADD: "new-todo",
    TOGGLE: "toggle-todo",
    TOGGLE2: "toggle-todo2",
    DELETE: "del-todo"
}

const reducerTodo = (state, action) => {

    switch(action.type) {
        case ACTIONS.ADD:
            console.log("add dispatch called ")
            //return [...state, { id: Date.now(), name: action.payload.name, completed: false}] 
            return [...state, { ...action.payload }] 
        case ACTIONS.TOGGLE:
            console.log("toggle dispatch called ")
            return state.map((todo) => {
                if(todo.id === action.payload.id) {
                    console.log("inverto complete")
                    //todo.complete = !todo.complete
                    return {...todo, complete: !todo.complete}
                }
                return {...todo}
            })

        case ACTIONS.TOGGLE2:
            return state.map((todo) => {
                return {...todo, 
                        complete: todo.id === action.payload.id ? !todo.complete : todo.complete
                    }
            })

        case ACTIONS.DELETE:
            console.log("delete dispatch called ")
            return state.filter(todo => {
                return todo.id !== action.payload.id
            })
    }

}

export const NewTodo = (props) => {
    console.log("called Newtodo")
    console.log(props)

    const handleToggle = (id) => {
        console.log("handle ", id)
        props.dispatch({type: props.actions.toggle, payload: {id: id}})
    }
    
    const handleDelete = (id) => {
        props.dispatch({type: props.actions.delete, payload: {id: id}})
    }
    
    return (
        
            <li style={{ color: props.todo.complete? '#000' : '#CCC' }}>
                    <span>{props.todo.id}</span>:
                    <span>{props.todo.name}</span>
                    <span>{props.todo.complete}</span>
                    <button onClick={e => handleToggle(props.todo.id)}>Toggle</button>
                    <button onClick={e => handleDelete(props.todo.id)}>Delete</button>  
            </li>

        
    )
}

export const NewTodoList = () => {

    const [name, setName] = useState('')
    const [state, dispatchTodo] = useReducer(reducerTodo, INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchTodo({type: ACTIONS.ADD, payload: {id: Date.now(), name: name, complete: false}})
        setName('')
    }

    const handleChange = (name) => {
        setName(name)
    }

    console.log("STATE VALE ")
    console.log(state)

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={name} onChange={e => handleChange(e.target.value)} />
            </form>    

            <div>
                <ul>
                {state.map((todo, i) => {
                        {console.log(todo)}
                        return <NewTodo todo={todo} key={i} dispatch={dispatchTodo} 
                                 actions={{toggle: ACTIONS.TOGGLE, delete: ACTIONS.DELETE }} />
             
                })}
                </ul>
            </div>
        </>
    )
}