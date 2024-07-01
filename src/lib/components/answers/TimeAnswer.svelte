<script lang="ts">
	import type { TimeQuestion } from '$lib/models/questions/timeQuestion';
	import BaseAnswer from './BaseAnswer.svelte';

	let { questionData }: { questionData: TimeQuestion } = $props();
	let userSelected = $state('');
</script>

<BaseAnswer {questionData}>
	<input type="time" style="" bind:value={userSelected} />
	{userSelected}
</BaseAnswer>
