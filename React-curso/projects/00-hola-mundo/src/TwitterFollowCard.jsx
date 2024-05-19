import { useState } from "react"


export function TwitterFollowCard({children, userName='unknown', initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 
                                'tw-followCard-button is-following':
                                'tw-followCard-button'

    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/twitter/${userName}`} 
                    alt="El avatar de kikobetas" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span 
                    className='tw-followCard-info-username'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handlerClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}