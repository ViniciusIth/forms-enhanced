<script lang="ts">
	import type { Question } from '$lib/models/question';
	import TextArea from '$lib/components/inputs/TextArea.svelte';
	import BaseEditable from './BaseEditable.svelte';

	let { questionData }: { questionData: Question } = $props();
	let userAnswer: string = $state('');
</script>

<BaseEditable {questionData}>
	<TextArea maxRows={10} minRows={3} bind:value={userAnswer}></TextArea>
</BaseEditable>
