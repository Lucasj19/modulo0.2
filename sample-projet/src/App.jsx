import { useState } from 'react'

function App() {
  const[todos, setTodos] = useState([
    {
      id: 1,
      texto: "Realizar treino",
      categoria: "Exercicios",
      feito: true
    },
    {
      id: 2,
      texto: "Fazer tarefa do +PraTi",
      categoria: "Estudos",
      feito: false
    },
    {
      id: 3,
      texto: 'Limapar a casa',
      categoria: "Diarias",
      feito: false
    }
  ])

  const concluirTarefa = (id) => {
    setTodos(todos.map((todo) => 
    todo.id === id ? { ... todo, feito: !todo.feito} : todo //copiar
    ))
  }

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="conteudo">
           <input type="checkbox" checked={todo.feito} onChange={() => concluirTarefa(todo.id)}/>
           <p>{todo.texto}</p>
           <p>({todo.categoria})</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  }

export default App 
