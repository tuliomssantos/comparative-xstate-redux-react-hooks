import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { energize220v } from '../../../services'

export function energizeEvent(selectedLampVoltage) {
	return async function energizeThunk(dispatch) {
		try {
			await energize220v(selectedLampVoltage)

			dispatch({ type: 'TURN_ON' })
		} catch (error) {
			dispatch({ type: 'BREAK_LIGHT' })
		}
	}
}

const lightSwitchState = {
	isOff: true,
	isCheckingVoltage: false,
	isLightBroken: false,
	isEnergizing: false,
}

function lightSwitchReducer(state = lightSwitchState, action) {
	switch (action.type) {
		case 'SELECT_LAMP': {
			return {
				...state,
				isEnergizing: true,
			}
		}

		case 'TURN_ON': {
			return {
				...state,
				isOff: false,
				isEnergizing: false,
			}
		}

		case 'TURN_OFF': {
			return {
				...state,
				isOff: true,
				isEnergizing: false,
			}
		}

		case 'BREAK_LIGHT': {
			return {
				...state,
				isLightBroken: true,
				isEnergizing: false,
			}
		}

		default: {
			return state
		}
	}
}

const composedEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(lightSwitchReducer, composedEnhancer)

export default store
