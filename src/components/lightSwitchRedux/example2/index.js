import React from 'react'

import { Provider } from 'react-redux'

import lightSwitchStore from './store'
import LightSwitch from './LigthSwitch'

const LightSwitchRoot = () => {
	return (
		<Provider store={lightSwitchStore}>
			<LightSwitch />
		</Provider>
	)
}

export default LightSwitchRoot
