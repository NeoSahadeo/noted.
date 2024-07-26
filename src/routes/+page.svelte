<script lang="ts">
	import { parseMarkdown } from '$lib/utils/markdown.svelte';
	import { homeURL } from '$lib/store';
	const content1 = parseMarkdown(`

# it's <span>noted.</span><a href="${$homeURL + '/screensaver/dvd'}">📀</a>

The site contains useful information I've learnt and hopefully you might find useful. I've tried to make everything as interactive as possible.

Everything on this site is either open-source or created by me. Feel free to \`copy-paste\` anything you find! 🤓

`);
</script>

<div class="glass max-w-md mx-auto my-auto">
	<section class="markdown">
		{@html content1}
	</section>
	<div class="flex flex-col gap-3 w-fit mt-5">
		<div class="">
			<a
				href={$homeURL + '/query?='}
				class="button-primary"
			>
				Latest
			</a>
			<a
				href={$homeURL + '/categories'}
				class="button-primary"
			>
				Categories
			</a>
			<a href={$homeURL + '/about'} class="button-primary">
				About
			</a>
		</div>
		<div>
			<a
				target="_blank"
				href="https://github.com/NeoSahadeo/noted."
			>
				<button class="button-secondary self-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 16 16"
						{...$$props}
					>
						<path
							fill="white"
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
						/>
					</svg>
				</button>
			</a>
			<a
				target="_blank"
				href="https://www.instagram.com/neosahadeo/"
			>
				<button class="button-secondary self-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						{...$$props}
					>
						<path
							fill="white"
							d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
						/>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</a>
		</div>
	</div>
</div>
