import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const names = [
        {
            userName: 'kikobeats',
            name: 'Juan Perez Diaz',
            isFollowing: false
        },
        {
            userName: 'goncy',
            name: 'Gonzalo Fernandez',
            isFollowing: true
        },
        {
            userName: 'elonmusk',
            name: 'Elon Musk',
            isFollowing: false
        },
        {
            userName: 'freddust',
            name: 'Fred Dust',
            isFollowing: false
        }
    ]

    return (
        <section className='App'>
            {
                names.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}