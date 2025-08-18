import './App.css'


function App() {

  return (
    <div className='grid grid-cols-5 h-screen'>
      <div className='col-span-1 bg-zinc-800'>
       hello
      </div>
      <div className='col-span-4'>
        <div className='container h-110'>

        </div>
        <div className='bg-zinc-800 w-1/2'>
            <input type = "text" placeholder='Ask me anything' />
            <button>Ask</button>
        </div>

      </div>
    </div>
  )
}

export default App
