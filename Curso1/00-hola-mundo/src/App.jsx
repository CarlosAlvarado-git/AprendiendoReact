import './App.css'
export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img  
                    className='tw-followCard-avatarimg'
                    alt="El avatar de Midudev" src="https://unavatar.io/midudev" />
                <div className='tw-followCard-info'>
                    <strong>Miguel Angel Duran</strong>
                    <span className='tw-followCard-info-userName'>@midudev</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}