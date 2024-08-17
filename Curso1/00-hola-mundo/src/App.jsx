import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard';
export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev"  isFollowing>
                Miguel Angel
            </TwitterFollowCard>
            <TwitterFollowCard userName="Carlos_0100Alva" isFollowing={false}>
                Carlos Alvarado
            </TwitterFollowCard>
        </section>
    )
}