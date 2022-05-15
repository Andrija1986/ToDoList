import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const App = () => {


  const [data, setData]= useState([]);
  const [task, setTask] = useState({
    id: '',
    item: ''
  });
  //const [taskInput, setTaskInput] = useState('');
  const inputRef = useRef();



    const changeHandler = (e) => {
    setTask({id: uuidv4(), item: e.target.value});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    task.item.length > 0 && setData([...data, task]);
    setTask({id: 0, item: ""});
    inputRef.current.focus()
  }

  const deleteHandler = (id) => {
    setData(data.filter((item)=> item.id !== id));
    inputRef.current.focus();
  }


    useEffect(()=> {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
      let storage = localStorage.getItem('data');
      let storageItem = JSON.parse(storage);

      //storageItem !== null && setData(storageItem);
      storageItem && setData(storageItem);
    }, [])


    useEffect(()=> {
      data.length === 0 && localStorage.removeItem('data')
      data.length > 0 && localStorage.setItem('data', JSON.stringify(data))
    }, [data])



  return (
    <main>
      <Header 
      submitHandler={submitHandler}
      changeHandler={changeHandler}
      inputRef={inputRef}
      task={task}
      />
      <Content 
      data={data}
      deleteHandler={deleteHandler}
      />
      <Footer/>
    </main>
  );
}

export default App;

