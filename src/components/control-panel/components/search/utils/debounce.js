export const debounce = (fn, delay = 1500) => {
	let timerId;

	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(fn, delay, ...args);
	};
};
