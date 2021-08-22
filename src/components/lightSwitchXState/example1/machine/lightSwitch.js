import { createMachine } from 'xstate'

export const lightSwitchMachine = createMachine({
	id: 'lightSwitchMachine',
	initial: 'lightOff',
	strict: true,
	states: {
		lightOff: {
			on: {
				TURN_ON: 'lightOn',
			},
		},

		lightOn: {
			on: {
				TURN_OFF: 'lightOff',
			},
		},
	},
})
