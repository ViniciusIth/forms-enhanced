<script lang="ts">
	let {
		value = $bindable(''),
		minRows,
		maxRows
	}: { value: string; minRows: number; maxRows: number } = $props();

	let minHeight: string = $state(`${1 + minRows * 1.2}em`);
	let maxHeight: string = $state(maxRows ? `${1 + maxRows * 1.2}em` : `auto`);
</script>

<div class="container">
	<pre aria-hidden="true" style="min-height: {minHeight}; max-height: {maxHeight}">
        {value + '\n'}
    </pre>

	<textarea bind:value></textarea>
</div>

<style>
	.container {
		position: relative;
	}

	pre,
	textarea {
		font-family: inherit;
		padding: 0.5em;
		box-sizing: border-box;
		line-height: 1.2;
		overflow: scroll;
		margin: 0;
	}

	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		resize: none;
	}
</style>
