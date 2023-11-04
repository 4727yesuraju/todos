import {createContext,useEffect,useState} from 'react';
import AddItem from './components/AddItem';
import Todos from './components/Todos';



export const userContext = createContext();

export default function App(){

    //fetching from localstorage
    const data = JSON.parse(localStorage.getItem("todos"));

    //initial value to todos
    const [todos,setTodos] = useState(data || [{id:1,task:"eat",checked:true}]);

    //error for empty task
    const [error,setError] = useState(false);
   
    //when state change new value to localstorage
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    //complete functionality
    function handleCheckChange(id){
        setTodos(todos.map(todo=> ((todo.id === id) ? {...todo,checked:!todo.checked} : todo )))
    }

    //delte task
    function handleDelete(id){
         setTodos(todos.filter(todo=>todo.id!==id))
    }

    //adding new task
    function addItem(task){
        if(!task) return setError(true);
        const id = todos[todos.length-1]?.id+1 || 1;
        const newTask = {id,task,checked:false};
        setTodos([...todos,newTask]);
        return setError(false);
    }

    return <userContext.Provider value={{todos,setTodos,handleCheckChange,handleDelete,addItem,error}}>
          <div className="wrapper">
            <AddItem/>
            <Todos/>
          </div>
    </userContext.Provider>
}