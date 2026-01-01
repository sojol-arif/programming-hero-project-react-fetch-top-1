import React, { use } from 'react';
import './Available.css';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({playerPromise, setAvailable, available, setPurchasedPlayer, purchasedPlayer}) => {

    const playerData = use(playerPromise);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 max-w-[1200px] mx-auto my-10'>
            {playerData.map(player => (
                <PlayerCard key={player.id} available={available} setPurchasedPlayer={setPurchasedPlayer} setAvailable={setAvailable} player={player} purchasedPlayer={purchasedPlayer}></PlayerCard>

            ))}
        </div>
    );
}

export default AvailablePlayers;