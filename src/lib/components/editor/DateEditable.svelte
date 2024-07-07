<script lang="ts">
	import type { DateQuestion } from '$lib/models/questions/dateQuestion';
	import BaseEditable from './BaseEditable.svelte';

	let { questionData }: { questionData: DateQuestion } = $props();
</script>

<BaseEditable {questionData}>
	<input type="date" style="" disabled />
</BaseEditable>
