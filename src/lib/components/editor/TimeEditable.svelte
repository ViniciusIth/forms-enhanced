<script lang="ts">
	import type { TimeQuestion } from '$lib/models/questions/timeQuestion';
	import BaseEditable from './BaseEditable.svelte';

	let { questionData }: { questionData: TimeQuestion } = $props();
	let userSelected = $state('');
</script>

<BaseEditable {questionData}>
	<input type="time" style="" bind:value={userSelected} disabled />
	{userSelected}
</BaseEditable>
