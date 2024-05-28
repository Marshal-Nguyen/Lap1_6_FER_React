import React from 'react'
import { useState } from 'react';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';

import { Players } from './ListOfPlayers';
import styles from "./Player.module.css";



export default function Player() {

   const [player, setPlayer] = useState([])
    return (
        <>

            <div className='flex justify-center p-10'>
                <div className='grid grid-cols-3 gap-4'>
                    {Players.map((player) => (
                        <div key={player.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
                            <div className="px-6 py-4 text-center">
                                <img className="w-full" src={player.img} />
                                <h3 className="font-bold text-xl mb-2 font-mono">{player.name}</h3>
                                <p className='title mb-2'>{player.club}</p>
                                <p onClick={() => {setPlayer(player)}} className={clsx(styles.detailPlayer)} >
                                    <a href='#popup1' id='openPopUp'>
                                        Details
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                    <div id="popup1" className={clsx(styles.overlay)}>
                        <div className={clsx(styles.popup)}>
                            <img src={player.img}></img>
                            <h2>{player.name}</h2>
                            <a className={clsx(styles.close)} href='#'>&times;</a>
                            <div className={clsx(styles.content)}>
                                {player.info}
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Zoom}
            />
        </>
    )
}
