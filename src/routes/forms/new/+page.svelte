<script lang="ts">
	import DateEditable from '$lib/components/editor/DateEditable.svelte';
	import MultipleChoiceEditable from '$lib/components/editor/MultipleChoiceEditable.svelte';
	import ParagraphEditable from '$lib/components/editor/ParagraphEditable.svelte';
	import SelectionBoxEditable from '$lib/components/editor/SelectionBoxEditable.svelte';
	import ShortEditable from '$lib/components/editor/ShortEditable.svelte';
	import TimeEditable from '$lib/components/editor/TimeEditable.svelte';
	import { DateQuestion } from '$lib/models/questions/dateQuestion';
	import { MultipleChoiceQuestion } from '$lib/models/questions/multipleChoiceQuestion.svelte';
	import { ParagraphAnswerQuestion } from '$lib/models/questions/paragraphAnswerQuestion';
	import { SelectionBoxQuestion } from '$lib/models/questions/selectionBoxQuestion';
	import { ShortAnswerQuestion } from '$lib/models/questions/shortAnswerQuestion';
	import { TimeQuestion } from '$lib/models/questions/timeQuestion';

	const questions: any[] = $state([]);

	function getComponent(componentType: string) {
		switch (componentType) {
			case ShortAnswerQuestion.getQuestionType():
				return ShortEditable;
			case ParagraphAnswerQuestion.getQuestionType():
				return ParagraphEditable;
			case MultipleChoiceQuestion.getQuestionType():
				return MultipleChoiceEditable;
			case SelectionBoxQuestion.getQuestionType():
				return SelectionBoxEditable;
			case DateQuestion.getQuestionType():
				return DateEditable;
			case TimeQuestion.getQuestionType():
				return TimeEditable;
			default:
				console.error('unknown question type: ' + componentType);
				return;
		}
	}

	function addNewQuestion(newQuestionType: string, position: number) {
		let newQuestion;

		switch (newQuestionType) {
			case ShortAnswerQuestion.getQuestionType():
				newQuestion = new ShortAnswerQuestion();
				break;
			case ParagraphAnswerQuestion.getQuestionType():
				newQuestion = new ParagraphAnswerQuestion();
				break;
			case MultipleChoiceQuestion.getQuestionType():
				newQuestion = new MultipleChoiceQuestion();
				break;
			case SelectionBoxQuestion.getQuestionType():
				newQuestion = new SelectionBoxQuestion();
				break;
			case DateQuestion.getQuestionType():
				newQuestion = new DateQuestion();
				break;
			case TimeQuestion.getQuestionType():
				newQuestion = new TimeQuestion();
				break;
			default:
				console.error('unknown question type: ' + newQuestionType);
				return;
		}

		questions.push(newQuestion);
	}

	function showData() {
		for (const question of questions) {
			console.log($state.snapshot(question));
		}
	}

	// $inspect(questions);
</script>

<div>
	<button
		onclick={() => addNewQuestion(ParagraphAnswerQuestion.getQuestionType(), questions.length + 1)}
		>Paragraph</button
	>
	<button
		onclick={() => addNewQuestion(MultipleChoiceQuestion.getQuestionType(), questions.length + 1)}
		>Multiple Choice</button
	>
	<button
		onclick={() => addNewQuestion(SelectionBoxQuestion.getQuestionType(), questions.length + 1)}
		>Selection Box</button
	>
	<button onclick={() => addNewQuestion(DateQuestion.getQuestionType(), questions.length + 1)}
		>Date</button
	>
	<button onclick={() => addNewQuestion(TimeQuestion.getQuestionType(), questions.length + 1)}
		>Time</button
	>
	<button
		onclick={() => addNewQuestion(ShortAnswerQuestion.getQuestionType(), questions.length + 1)}
		>Short</button
	>
</div>

<button onclick={showData}>Show Data</button>

{#each questions as questionData}
	<svelte:component this={getComponent(questionData.type)} {questionData} />

	{questionData.order}
{/each}

