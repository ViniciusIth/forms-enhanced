<script lang="ts">
	import type { MultipleChoiceQuestion } from '$lib/models/questions/multipleChoiceQuestion';
	import BaseEditable from './BaseEditable.svelte';

	let { questionData }: { questionData: MultipleChoiceQuestion } = $props();
</script>

<BaseEditable {questionData}>
	<button onclick={() => questionData.addOption('')}>+</button>
	{#each questionData.options as option}
		<div>
			<input type="radio" id={option} value={option} />
			<label for={option}>{option}</label>
		</div>
	{/each}
</BaseEditable>
