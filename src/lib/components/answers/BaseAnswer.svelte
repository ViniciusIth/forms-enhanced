<script lang="ts">
	import { Question } from '$lib/models/question';

	let { questionData, children }: { questionData: Question; children: any } = $props();
</script>

<div class="base">
	<div>
		<h1>{questionData.title}</h1>
	</div>

	{#if questionData.hasDescription()}
		<div>
			{questionData.description}
		</div>
	{/if}

	<div class="user_input">
		{@render children()}
	</div>
</div>

<style>
	* {
		border: 1px dotted red;
	}

	div.base {
		margin: 0.5rem 0;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		background-color: #0f0f0f0f;
	}

	div.base div {
		margin: 0.5rem 0;
	}

	h1 {
		font-size: large;
		margin: 0;
	}
</style>
