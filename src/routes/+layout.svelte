<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import '../global.css';
	import '$lib/css/summercamp.css';
	import Header from '$lib/components/header.svelte';

	const calculateHeaderSize = ({
		baseSize = 3,
		scaleSize = 2
	}: {
		baseSize?: number;
		scaleSize?: number;
	} = {}) => {
		// baseSize is the maximum size;
		// scaleSize is how to scale values - smaller values
		// mean larger font sizes
		// Largest value for scaleSize is 2.166...
		// Larger values result is negative rem values;
		// refer to the scaleEquation function for calc.
		const HeaderLevels: any = {
			H1: 1,
			H2: 2,
			H3: 3,
			H4: 4,
			H5: 5,
			H6: 6
		};
		const scaleEquation = (headerLevel: number) => {
			// ( 2 - (10 / 6 )) = 1/3 = 0.3333
			// value is calculate do h6 will equal 1rem
			if (scaleSize != 2) {
				return `${baseSize - headerLevel * (scaleSize - 10 / 6)}rem`;
			}
			return `${baseSize - headerLevel * 0.3333}rem`;
		};
		const queryMe = (header: string) =>
			document.querySelectorAll(`.markdown ${header}`);
		[
			...queryMe('h1'),
			...queryMe('h2'),
			...queryMe('h3'),
			...queryMe('h4'),
			...queryMe('h5'),
			...queryMe('h6')
		].forEach((e: HTMLElement & any) => {
			e.style.fontSize = scaleEquation(
				HeaderLevels[e.tagName]
			);
		});
	};

	function setFontSize() {
		calculateHeaderSize();
	}

	onMount(() => {
		setFontSize();
		hljs.highlightAll();
	});
</script>

<Header />
<slot />
