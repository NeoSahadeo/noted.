<script lang="ts">
	import { page } from '$app/stores';
	import { parseMarkdown } from '$lib/utils/markdown.svelte';
	import { base } from '$app/paths';
	const content1 = parseMarkdown(`
## AHHH!

**A wild ${$page.status} has appeared.**
	`);
</script>

<section
	class="w-fit mx-auto my-auto flex flex-col items-center justify-center gap-2"
>
	<article class="markdown">
		{@html content1}
	</article>
	<img
		alt="Giggle Shitter Spinning around in a circle"
		src={base + '/giggleshitter.png'}
		class="sm:w-40 w-24 rotate"
	/>
	<div class="flex flex-col w-min gap-2">
		<span class="flex flex-row gap-2">
			<a href={base} class="button-special">Go Home</a>
			<a href={base + '/query?q='} class="button-special"
				>Browse</a
			>
		</span>
		<a
			href="https://youtu.be/JxS5E-kZc2s"
			class="button-special">Funny Cat Videos</a
		>
	</div>
</section>
