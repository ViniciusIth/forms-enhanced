<script lang="ts">
	import type { MultipleChoiceQuestion } from '$lib/models/questions/multipleChoiceQuestion';
	import BaseAnswer from './BaseAnswer.svelte';

	let { questionData }: { questionData: MultipleChoiceQuestion } = $props();
	let userSelected = $state([]);
</script>

<BaseAnswer {questionData}>
	{#each questionData.options as option}
		<div>
			<input type="checkbox" id={option} value={option} bind:group={userSelected} />
			<label for={option}>{option}</label>
		</div>
	{/each}

	{userSelected}
</BaseAnswer>
