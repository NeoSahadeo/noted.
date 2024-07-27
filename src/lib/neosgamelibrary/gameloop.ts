import { updateFrame } from './update';

let start: number | null = null;

export function step(timeStamp: number) {
	start ?? (start = timeStamp);
	const elapsed = timeStamp - start;

	updateFrame(elapsed);

	window.requestAnimationFrame((e) => step(e));
}
