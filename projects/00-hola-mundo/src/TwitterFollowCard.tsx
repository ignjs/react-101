import { useState } from "react"

export function TwitterFollowCard({ formatUserName, userName, name }: any) {

	const [isFollowing, setIsFollowing] = useState(false)
	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}
	const text = isFollowing ? 'Siguiendo' : 'seguir'
	const buttonClass = isFollowing ? 'tw-followCard-button is-following ' : 'tw-followCard-button'
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar " alt="avatar" src={`https://unavatar.io/${userName}`} />
				<div className='tw-followCard-info'>
					<strong>{name}</strong>
					<span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClass} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	)
}
