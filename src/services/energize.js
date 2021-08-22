export const energize220v = lampVoltage => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (lampVoltage === 220) {
				resolve('Correct voltage')
			} else {
				reject('Wrong voltage')
			}
		}, 500)
	})
}
