<script lang="ts">
	import type { Question } from '$lib/models/question.svelte';
	import BaseEditable from './BaseEditable.svelte';

	let { questionData }: { questionData: Question } = $props();
</script>

<BaseEditable {questionData}>
	<input type="text" />
</BaseEditable>
