

const Tasks = ({
    submitHandler, 
    changeHandler, 
    inputRef, 
    task,
    }) => {


  return (
       <form >
            <input 
            type="text"  
            ref={inputRef}
            placeholder="Write your Tasks"
            onChange={changeHandler}
            value={task.item}/>
            <button 
            onClick={submitHandler}
            >Add Tasks</button>
        </form>
  )
}

export default Tasks