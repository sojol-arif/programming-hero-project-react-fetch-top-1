import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvialblePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, use } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/player.json')
  return res.json()
}

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [available, setAvailable] = useState(600000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);
  console.log(purchasedPlayer);

  const removePlayer = (p) => {
    const finalPurchasedPlayer = purchasedPlayer.filter(player => player.name !== p.name);
    setPurchasedPlayer(finalPurchasedPlayer);
    setAvailable(available + p.price)
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <Navbar available={available}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center my-5'>
        <h2 className='text-3xl font-bold'>{toggle === true?"Available Players": `Selected Player (${purchasedPlayer.length}/6) `}</h2>
        <div>
          <button onClick={()=> setToggle(true)} className={`btn py-1 px-5 border-1 rounded-none rounded-l-2xl 
          ${toggle === true ? 'bg-[#E7FE29] font-bold': ""}`}> Available Players</button>
          <button onClick={()=> setToggle(false)} className={`btn py-1 px-5 border-1 rounded-none rounded-r-2xl 
          ${toggle === false ? "bg-[#E7FE29] font-bold":""}`}> Selected ({purchasedPlayer.length})</button>
        </div>
      </div>

      {toggle === true? <Suspense
          fallback={<div>Loading Available Players...</div>}
        >
          <AvialblePlayers purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} available={available} setAvailable={setAvailable} playerPromise={playerPromise}> </AvialblePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedPlayers>
      }

      <ToastContainer />
    </div>
  )
}

export default App
