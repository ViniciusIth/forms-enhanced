<script lang="ts">
	import type { Question } from '$lib/models/question';
	import BaseAnswer from './BaseAnswer.svelte';

	let { questionData }: { questionData: Question } = $props();
</script>


<BaseAnswer { questionData }>
    <input type="text">
</BaseAnswer>

