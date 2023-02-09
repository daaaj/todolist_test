import './App.css';
import { useState } from 'react';

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            todo: 'react를 배워봅시다',
        },
    ]);
    const [todo, setTodo] = useState('');

    // input에 작성시
    const writeTodo = (e) => {
        setTodo(e.target.value);
    };
    // 추가하기 클릭시
    const addTodo = () => {
        if (todo !== '') {
            const newTodo = {
                id: Date.now(),
                todo,
            };
            setTodoList([...todoList, newTodo]);
            setTodo('');
        }
    };
    return (
        <div className="App">
            <div className="header">
                <input value={todo} onChange={writeTodo} />
                <button onClick={addTodo}>추가하기</button>
            </div>
            <span>Todo List</span>
            <div className="boxArea">
                {todoList.map((list) => (
                    <div className="listBox">{list.todo}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
