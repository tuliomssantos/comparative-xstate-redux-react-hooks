import React, { useState } from 'react'

import lampOff from '../../../../images/lightOff.png'
import lampOn from '../../../../images/lightOn.png'

const LightSwitch = () => {
	const [isOff, setIsOff] = useState(true)

	const lampImage = () => {
		if (isOff) {
			return <img src={lampOff} />
		} else {
			return <img src={lampOn} />
		}
	}

	const handleClick = () => {
		if (isOff) {
			setIsOff(false)
		} else {
			setIsOff(true)
		}
	}

	return (
		<div className="container energizing-bg">
			<div className="box">
				<div className="wrapper-img">{lampImage()}</div>

				<button className={isOff ? 'btn' : 'btn dark-bg'} onClick={handleClick}>
					{isOff ? 'Acender' : 'Apagar'}
				</button>
			</div>
		</div>
	)
}

export default LightSwitch
