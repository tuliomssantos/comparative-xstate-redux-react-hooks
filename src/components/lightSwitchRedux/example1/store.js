import { createStore, applyMiddleware } from 'redux'

const lightSwitchState = {
	isOff: true,
}

function lightSwitchReducer(state = lightSwitchState, action) {
	switch (action.type) {
		case 'TURN_ON': {
			return {
				...state,
				isOff: false,
			}
		}

		case 'TURN_OFF': {
			return {
				...state,
				isOff: true,
			}
		}

		default: {
			return {
				...state,
			}
		}
	}
}

const store = createStore(lightSwitchReducer)

export default store
