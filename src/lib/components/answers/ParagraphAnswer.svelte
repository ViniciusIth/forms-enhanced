<script lang="ts">
	import type { Question } from '$lib/models/question';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import BaseAnswer from './BaseAnswer.svelte';

	let { questionData }: { questionData: Question } = $props();
	let userAnswer: string = $state('');
</script>

<BaseAnswer {questionData}>
	<TextArea maxRows={20} minRows={3} bind:value={userAnswer}></TextArea>
</BaseAnswer>
