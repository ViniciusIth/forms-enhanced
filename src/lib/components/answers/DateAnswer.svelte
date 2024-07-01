<script lang="ts">
	import type { DateQuestion } from '$lib/models/questions/dateQuestion';
	import BaseAnswer from './BaseAnswer.svelte';

	let { questionData }: { questionData: DateQuestion } = $props();
	let userSelected = $state('');
</script>

<BaseAnswer {questionData}>
	<input type="date" style="" bind:value={userSelected} />
	{userSelected}
</BaseAnswer>
