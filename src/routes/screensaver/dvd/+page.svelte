<script lang="ts">
	//	This code is very janky, I know :)
	import { onMount } from 'svelte';
	import { step } from '$lib/neosgamelibrary/gameloop';
	import { pushToFrame } from '$lib/neosgamelibrary/update';

	const emojis = [
		'😀',
		'😃',
		'😄',
		'😁',
		'😆',
		'😅',
		'🤣',
		'😂',
		'🙂',
		'🙃',
		'🫠',
		'😉',
		'😊',
		'😇',
		'🥰',
		'😍',
		'🤩',
		'😘',
		'😗',
		'☺️,',
		'😚',
		'😙',
		'🥲',
		'😋',
		'😛',
		'😜',
		'🤪',
		'😝',
		'🤑',
		'🤗',
		'🤭',
		'🫢',
		'🫣',
		'🤫',
		'🤔',
		'🫡',
		'🤐',
		'🤨',
		'😐️',
		'😑',
		'😶',
		'🫥',
		'😶',
		'😏',
		'😒',
		'🙄',
		'😬',
		'😮',
		'🤥',
		'🫨',
		'😌',
		'😔',
		'😪',
		'🤤',
		'😴',
		'😷',
		'🤒',
		'🤕',
		'🤢',
		'🤮',
		'🤧',
		'🥵',
		'🥶',
		'🥴',
		'😵',
		'😵',
		'🤯',
		'🤠',
		'🥳',
		'🥸',
		'😎',
		'🤓',
		'🧐',
		'😕',
		'🫤',
		'😟',
		'🙁',
		'☹️,',
		'😮',
		'😯',
		'😲',
		'😳',
		'🥺',
		'🥹',
		'😦',
		'😧',
		'😨',
		'😰',
		'😥',
		'😢',
		'😭',
		'😱',
		'😖',
		'😣',
		'😞',
		'😓',
		'😩',
		'😫',
		'🥱',
		'😤',
		'😡',
		'😠',
		'🤬',
		'😈',
		'👿',
		'💀',
		'☠️,',
		'💩',
		'🤡',
		'👹',
		'👺',
		'👻',
		'👽️',
		'👾',
		'🤖',
		'😺',
		'😸',
		'😹',
		'😻',
		'😼',
		'😽',
		'🙀',
		'😿',
		'😾',
		'🙈',
		'🙉',
		'🙊'
	];
	let container: HTMLElement;
	let dvd: HTMLElement;
	const velocity: [number, number] = [
		7,
		Math.random() * 360
	];
	function degToRad(degree: number) {
		// 0.01745329252 comes from pi/180
		return degree * 0.01745329252;
	}
	function horizontalSpeed(vector: [number, number]) {
		return vector[0] * Math.cos(degToRad(vector[1]));
	}
	function verticalSpeed(vector: [number, number]) {
		return vector[0] * Math.sin(degToRad(vector[1]));
	}

	function update(elapsed: number) {
		const child = dvd.getBoundingClientRect();
		const parent = container.getBoundingClientRect();

		if (
			child.bottom > parent.bottom ||
			child.top < parent.top
		) {
			velocity[1] *= -1;
			dvd.innerHTML =
				emojis[Math.floor(Math.random() * emojis.length)];
		}
		if (
			child.right > parent.right ||
			child.left < parent.left
		) {
			velocity[0] *= -1;
			velocity[1] *= -1;
			dvd.innerHTML =
				emojis[Math.floor(Math.random() * emojis.length)];
		}
		dvd.style.left =
			parseInt(dvd.style.left) +
			horizontalSpeed(velocity) +
			'px';
		dvd.style.top =
			parseInt(dvd.style.top) +
			verticalSpeed(velocity) +
			'px';
	}

	onMount(() => {
		pushToFrame(update);
		const parent = container.getBoundingClientRect();
		dvd.style.left = parent.width / 2 + 'px';
		dvd.style.top = parent.height / 2 + 'px';
		dvd.innerHTML =
			emojis[Math.floor(Math.random() * emojis.length)];
		window.requestAnimationFrame((e) => step(e));
	});
</script>

<div
	bind:this={container}
	class="w-full h-full overflow-hidden relative"
>
	<div
		bind:this={dvd}
		class="w-fit absolute text-5xl"
	></div>
</div>
