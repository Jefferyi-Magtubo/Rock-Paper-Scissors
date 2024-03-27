import React from 'react'

import './App.css'

function App() {
  
  const [rules, setRules] = React.useState<boolean>(false)           

  return (rules ?
    <div id="rules" className={`flex flex-col justify-center items-center bg-white px-8 h-screen`}>
      <h1 className='text-3xl text-dark-text font-bold mb-12'>RULES</h1>
      <img src='/images/image-rules.svg'  />
        <img src='/images/icon-close.svg' className='mt-24 hover:cursor-pointer' onClick={() => setRules(prev => !prev)} />
    </div>
  :
    <main className='font-barlow'>



      <div className='flex'>

      </div>

      <button onClick={() => setRules(prev => !prev)}>s</button>



    </main>
  )
}

export default App
