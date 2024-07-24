<header
	class="w-full px-2 py-2 flex flex-row items-center backdrop-blur-3xl bg-red-500 bg-opacity-20"
>
	<a href="./" class="px-3 py-2 rounded font-semibold">
		noted.
	</a>
	<form
		class="ml-4 flex flex-row gap-2"
		method="get"
		action="./query"
	>
		<input
			class="backdrop-blur-3xl bg-opacity-50 bg-red-500 px-3 py-1 rounded-sm hover:bg-orange-600"
			type="search"
			name="q"
			placeholder="Search Notes"
		/>
		<button
			class="bg-red-600 pl-1 pr-2 py-1 rounded-sm hover:bg-orange-600 font-semibold flex flex-row items-center gap-1"
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
			Search
		</button>
	</form>
</header>

<style>
	::placeholder {
		font-weight: 550;
		color: white;
	}
</style>
