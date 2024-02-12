
export function TwitterFollowCard(){
    return(
       <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
             alt="Mi avatar de twitter" src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"></img>
        <div className='tw-followCard-info'>
            <strong>Mari Rodriguez</strong>
            <span className='tw-followCard-infoUserName'>@marirodriguez</span>
        </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguirme
            </button>
        </aside>
       </article>
    )
}