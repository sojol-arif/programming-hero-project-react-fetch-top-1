import React, { memo, useState } from 'react';
import deleted from "../../assets/delete.png";

const SelectedCard = memo(({player, removePlayer}) => {
    const handleRemovePlayer = () => {

        removePlayer(
            player
        );
    }

    return (
        <div key={player.id} className="border border-[#D9D9D9] flex justify-between items-center rounded-2xl overflow-hidden p-4">
            <div className='flex gap-4 items-center'>
                <img className='h-[80px] w-[80px] object-cover rounded-2xl' src={player.image} alt="" />
                <div className=''>
                    <h3 className='text-[24px] font-semibold'>{player.name}</h3>
                    <p>{player.batting}</p>
                </div>
            </div>
            <div className='p-2'>
                <button onClick={handleRemovePlayer}><img src={deleted} alt="delete png" /></button>
            </div>
        </div>
    );
});

export default SelectedCard;