const updateCall: any[] = [];

export function updateFrame(timeElapsed: number) {
	updateCall.forEach((e) => {
		e(timeElapsed);
	});
}

export function pushToFrame(callback: Function) {
	updateCall.push(callback);
}
