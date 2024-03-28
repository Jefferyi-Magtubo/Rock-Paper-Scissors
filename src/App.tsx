import React from 'react'
import ReactModal from 'react-modal';


import './App.css'

function App() {
  
  const [rules, setRules] = React.useState<boolean>(false)           

  return (
    <>
    <div id="rules" className="hidden flex-col justify-center items-center bg-white px-8 h-screen" >
      <h1 className='text-3xl text-dark-text font-bold mb-12'>RULES</h1>
      <img src='/images/image-rules.svg'  />
        <img src='/images/icon-close.svg' className='mt-24 hover:cursor-pointer'
        onClick={() => {
          document.getElementById('rules')?.classList.add('hidden') 
          document.getElementById('rules')?.classList.remove('flex')
          document.getElementById('game')?.classList.add('flex')
          document.getElementById('game')?.classList.remove('hidden')
        }}
          />
    </div>

    <main id='game' className='flex flex-col justify-between h-screen font-barlow text-white p-4 py-8'>

      <section className='flex border-2 px-4 py-4 justify-between items-center border-header-outline rounded'>
        <img src='/images/logo.svg' className='w-24 h-16' />
        <div className='bg-gray-100 flex flex-col justify-center items-center px-3 py-4 rounded-lg'>
          <h1 className='text-score-text text-sm tracking-wide font-bold'>SCORE</h1>
          <h1 className='text-dark-text text-3xl font-bold'>12</h1>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center border bg-center bg-no-repeat  ' style={{backgroundImage:`url(public/images/bg-triangle.svg)`}}>
        <div className='flex  mb-24'>
          <img src='/images/icon-paper.svg' className=' mr-12 bg-white p-4 rounded-full border-8 border-paper' />        
          <img src='/images/icon-scissors.svg' className='ml-12 bg-white p-4 rounded-full border-8 border-scissors' />   
          
        </div>
          <img src='/images/icon-rock.svg' className='bg-white p-4 rounded-full border-8 border-rock'/>

      </section>
     
      <button onClick={() => {
                document.getElementById('game')?.classList.remove('flex')
                document.getElementById('game')?.classList.add('hidden')
                document.getElementById('rules')?.classList.add('flex')
                document.getElementById('rules')?.classList.remove('hidden')
              }} 
              className='font-medium border border-white-1'
      >
      RULES
      </button>

    </main>
    </>
  )
}

export default App
