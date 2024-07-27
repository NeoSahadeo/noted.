<script lang="ts">
	import { base } from '$app/paths';
	let h: number;
</script>

<div class="w-full" style="height: {h}px"></div>
<header
	bind:clientHeight={h}
	class="fixed top-0 w-full px-2 py-2 flex flex-row items-center backdrop-blur-3xl bg-red-500 bg-opacity-20 z-50"
>
	<a
		href={base}
		class="px-3 py-2 rounded font-semibold sm:block hidden underline-animate text-white hover:text-white"
	>
		noted.
	</a>
	<form
		class="sm:ml-4 ml-0 flex flex-row gap-2"
		method="get"
		action={base + '/query'}
	>
		<input
			class="w-full backdrop-blur-3xl bg-opacity-50 bg-red-500 px-3 py-1 rounded hover:bg-orange-600"
			type="search"
			name="q"
			placeholder="Search Notes"
		/>
		<button
			class="bg-red-600 sm:pl-1 sm:pr-2 px-2 py-1 rounded hover:bg-orange-600 font-semibold flex flex-row items-center gap-1"
			type="submit"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 24 24"
				{...$$props}
			>
				<path
					fill="white"
					d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
				/>
			</svg>
			<span class="sm:block hidden"> Search </span>
		</button>
	</form>
	<nav class="ml-auto md:block hidden">
		<ul class="flex flex-row gap-5">
			<li>
				<a
					class="link font-semibold"
					href={base + '/query?q='}>Latest</a
				>
			</li>
			<li>
				<a
					class="link font-semibold"
					href={base + '/categories'}>Categories</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	::placeholder {
		font-weight: 550;
		color: white;
	}
</style>
