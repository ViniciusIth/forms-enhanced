<script lang="ts">
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import type { Question } from '$lib/models/question.svelte';
	import BaseEditable from './BaseEditable.svelte';

	let { questionData }: { questionData: Question } = $props();
	let userAnswer: string = $state('');
</script>

<BaseEditable {questionData}>
	<TextArea maxRows={10} minRows={3} bind:value={userAnswer}></TextArea>
</BaseEditable>
