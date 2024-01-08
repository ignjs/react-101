import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'
export function App() {
	const format = (userName: any) => `@${userName}`
	return (
		<section className='App'>
			<TwitterFollowCard formatUserName={format} userName="ignjs" name="Ignacio Jara" isFollowing />
			<TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Angel Duran" isFollowing={false} />
		</section>

	)
}