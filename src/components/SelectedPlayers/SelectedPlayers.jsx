import React, { memo, useState } from 'react';
import deleted from "../../assets/delete.png";
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = memo(({purchasedPlayer, removePlayer}) => {

    return (
        <div>
            <div className='grid grid-cols-1  gap-y-6 gap-x-6 max-w-[1200px] mx-auto my-10'>
                {purchasedPlayer.map(player => (
                    <SelectedCard key={player.id} removePlayer={removePlayer} player={player}></SelectedCard>
                ))}
            </div>
        </div>
    );
});

export default SelectedPlayers;