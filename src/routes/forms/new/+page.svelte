<script lang="ts">
	import DateEditable from '$lib/components/editor/DateEditable.svelte';
	import MultipleChoiceEditable from '$lib/components/editor/MultipleChoiceEditable.svelte';
	import ParagraphEditable from '$lib/components/editor/ParagraphEditable.svelte';
	import SelectionBoxEditable from '$lib/components/editor/SelectionBoxEditable.svelte';
	import ShortEditable from '$lib/components/editor/ShortEditable.svelte';
	import TimeEditable from '$lib/components/editor/TimeEditable.svelte';
	import { DateQuestion } from '$lib/models/questions/dateQuestion';
	import { MultipleChoiceQuestion } from '$lib/models/questions/multipleChoiceQuestion';
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
				newQuestion = ShortAnswerQuestion.generateDefault();
				break;
			case ParagraphAnswerQuestion.getQuestionType():
				newQuestion = ParagraphAnswerQuestion.generateDefault();
				break;
			case MultipleChoiceQuestion.getQuestionType():
				newQuestion = MultipleChoiceQuestion.generateDefault();
				break;
			case SelectionBoxQuestion.getQuestionType():
				newQuestion = SelectionBoxQuestion.generateDefault();
				break;
			case DateQuestion.getQuestionType():
				newQuestion = DateQuestion.generateDefault();
				break;
			case TimeQuestion.getQuestionType():
				newQuestion = TimeQuestion.generateDefault();
				break;
			default:
				console.error('unknown question type: ' + newQuestionType);
				return;
		}

		newQuestion.order = position;
		questions.push(newQuestion);
	}

	$effect(() => {
		questions.sort((a, b) => a.order - b.order);
	});

	$inspect(questions);
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

{#each questions as questionData}
	<svelte:component this={getComponent(questionData.type)} {questionData} />

	{questionData.order}
{/each}
