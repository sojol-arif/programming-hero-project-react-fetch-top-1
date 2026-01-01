import React, { memo, useState } from 'react';
import user from "../../assets/user.png";
import flag from "../../assets/flag.png";
import { toast } from 'react-toastify';

const PlayerCard = memo(({player, setAvailable, available, setPurchasedPlayer, purchasedPlayer}) => {
    const [isSelected, setSelected] = useState(false);

    const handleSelected = (playerData) => {
        if(available< playerData.price){
            toast('Not Enough Coins')
            return
        }
        console.log(purchasedPlayer.length);
        if(purchasedPlayer.length === 3){
            toast('3 Players already added')
        }
        setSelected(true)
        setAvailable(available - playerData.price)

        setPurchasedPlayer([...purchasedPlayer, playerData])
        toast('Player Purchased');
    }

    return (
        <div key={player.id} className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={player.image}
                    alt="Shoes"
                    className='w-full object-cover h-[250px]' />
            </figure>
            <div className="card-body">
                <div className='flex'>
                    <img src={user} width="28" alt="jjhj" />
                    <h2 className="card-title ml-2">{player.name}</h2>
                </div>
                <div className='flex gap-1 mb-3 pb-5 mt-5 border-b-[rgba(0,0,0,0.1)] border-b-[1px]'>
                    <div className='flex gap-1 items-center'>
                        <img className='w-[20px] h-[20px]' src={flag} width="20px" height="20px" alt="flag" />
                        <span className='ml-2'>{player.country}</span>
                    </div>
                    <button className='btn font-bold ml-auto max-w-fit'>{player.role}</button>
                </div>
                <div className='rating font-[16px] font-bold'>Rating: {player.rating}</div>
                <div className='left-hand flex justify-between'>
                    <span className='font-bold'>Left-Hand-Bat</span>
                    <span>{player.batting}</span>
                </div>
                <div className="card-actions flex justify-between items-center mt-2">
                    <p className='font-bold'>Price {player.price}</p>
                    <button disabled={isSelected} onClick={()=>{handleSelected(player)}
                    } className="btn">{isSelected==true? "Selected": "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
});

export default PlayerCard;