import { useState } from 'react';
import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard';
export function App () {
    const [name, setName] = useState('midudev');
    return (
        <section className='App'>
            <TwitterFollowCard userName={name}>
                Miguel Angel
            </TwitterFollowCard>
            <TwitterFollowCard userName="Carlos_0100Alva">
                Carlos Alvarado 
            </TwitterFollowCard>

            <button onClick={() => setName('cambioNombre')}>
                Cambio de nombre
            </button>
        </section>
    )
}