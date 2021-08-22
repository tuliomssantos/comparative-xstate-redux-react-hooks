import { createMachine } from 'xstate'
import { energize220v } from '../../../../services'

export const lightSwitchMachine = createMachine({
	id: 'lightSwitchMachine',
	initial: 'lightOff',
	strict: true,
	states: {
		lightOff: {
			on: {
				SELECT_LAMP: 'energizingLamp',
			},
		},

		energizingLamp: {
			invoke: {
				id: 'enerzigeLamp',
				src: (_, { voltage }) => energize220v(voltage),
				onDone: 'lightOn',
				onError: 'lightBroken',
			},
		},

		lightOn: {
			on: {
				TURN_OFF: 'lightOff',
			},
		},

		lightBroken: {},
	},
})
