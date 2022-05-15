import Tasks from "./Tasks"


const Header = ({
    submitHandler, 
    changeHandler, 
    inputRef,  
    taskInput,
    task
    }) => {






  return (
    <header>
            <Tasks 
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            inputRef={inputRef}
            taskInput={taskInput}
            task={task}/>
    </header>
  )
}

export default Header