<script context="module" lang="ts">
	import { marked } from 'marked';

	// using marked till I can implement my own parser
	/*
	headers - #
	bold - ** **
	italic - **
	bold and italic - *** ***
	blockquotes - >
	inline-code - ` `
	inside-inline-code - `` `_` ``

	horizontal-rule - ___ or --- or ***
	should have blank lines before and after

	lists - '-' or '+' or '*' and '1. 2. 3.' 
	with escape sequence \

	images ![]()
	links []()
	urls and email - < >
	breaklines
	paragraphs - 
*/
	export function parseMarkdown(characterStream: string) {
		return marked.parse(characterStream);
	}
</script>
