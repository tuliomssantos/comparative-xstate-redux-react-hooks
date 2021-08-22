import React from 'react'

import { Provider } from 'react-redux'
import LightSwitch from './LightSwitch'

import lightSwitchStore from './store'

const LightSwitchRoot = () => {
	return (
		<Provider store={lightSwitchStore}>
			<LightSwitch />
		</Provider>
	)
}

export default LightSwitchRoot
