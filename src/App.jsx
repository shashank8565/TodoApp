import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './components/Appname'
import Appname from './components/Appname'
import Input from './components/Input'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'
import './style.css'

function App() {
 

  return (
   <center className='todo-container'>
   <Appname/>
   <Input/>
   <div className='items-container'>
   <TodoItem1/>
   <TodoItem2/>
    
   </div>



   </center>
  )
}

export default App
