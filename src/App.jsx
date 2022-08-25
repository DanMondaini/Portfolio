import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import  './styles/components/app.sass'

function App() {

  return (
    <div className='App'>
      <h1>Daniel Mondaini</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
