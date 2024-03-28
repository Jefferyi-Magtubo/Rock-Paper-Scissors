import React from 'react'
import ReactModal from 'react-modal';


import './App.css'

function App() {
  
  const [score, setScore] = React.useState<number>(0)

  const [userChoice, setUserChoice] = React.useState<string>("")
  const [compChoice, setCompChoice] = React.useState<string>("")

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
          <h1 className='text-dark-text text-3xl font-bold'>{score}</h1>
        </div>
      </section>

      <div>

        <section className='flex flex-col  items-center  bg-center bg-no-repeat ' style={{backgroundImage:`url(public/images/bg-triangle.svg)`}}>
          <div className='flex  mb-32'>
            <img src='/images/icon-paper.svg' className='-ml-1 mr-20 bg-white p-4 rounded-full border-8 border-paper hover:shadow-2xl hover:shadow-white hover:cursor-pointer' onClick={() => setUserChoice('paper')} />        
            <img src='/images/icon-scissors.svg' className='ml-5 bg-white p-4 rounded-full border-8 border-scissors hover:cursor-pointer md:w-42' onClick={() => setUserChoice('paper')} />    
          </div>
            <img src='/images/icon-rock.svg' className='bg-white p-4 rounded-full border-8 border-rock hover:cursor-pointer' onClick={() => setUserChoice('rock')} />

        </section>

      </div>
     
      <button onClick={() => {
        document.getElementById('game')?.classList.remove('flex')
        document.getElementById('game')?.classList.add('hidden')
        document.getElementById('rules')?.classList.add('flex')
        document.getElementById('rules')?.classList.remove('hidden')
        }} 
        className='font-medium border border-white-1 hover:text-blue-700 hover:bg-white mx-auto mt-4 py-1 px-8 rounded-full'
      >
      RULES
      </button>

    </main>
    </>
  )
}

export default App
