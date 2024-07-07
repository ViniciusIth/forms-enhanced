<script lang="ts">
	import TextArea from '../inputs/TextArea.svelte';
	import type { Question } from '$lib/models/question.svelte';
	import stringfy from '$lib/helpers/stringfy';

	let { questionData, children }: { questionData: Question; children: any } = $props();

	$inspect(questionData);
</script>

{stringfy(questionData)}

<div class="base">
	<div class="input_section">
		<input
			type="text"
			onfocusout={(e) => (questionData.title = e.target.value)}
			bind:value={questionData.title}
			placeholder="Question Title"
		/>
		<select name="" id="" bind:value={questionData.type}>
			{#each ['paragraph-question', 'short-question', 'multiple-choice-question', 'selection-box-question', 'date-question', 'time-question'] as input}
				<option value={input}>{input}</option>
			{/each}
		</select>
	</div>
	<div>
		<TextArea
			bind:value={questionData.description}
			minRows={5}
			maxRows={20}
		></TextArea>
		<!-- {#if questionData.hasDescription()} -->
		<!-- {/if} -->
	</div>

	<div class="user_input">
		{@render children()}
	</div>
</div>

<style>
	div.base {
		margin: 0.5rem 0;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		background-color: #0f0f0f0f;
	}

	div.base div {
		margin: 0.3rem 0;
	}

	div.input_section {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	div.user_input {
		border-radius: 0.5rem;
	}
</style>
