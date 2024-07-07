<script lang="ts">
	import DateAnswer from '$lib/components/answers/DateAnswer.svelte';
	import MultipleChoiceAnswer from '$lib/components/answers/MultipleChoiceAnswer.svelte';
	import ParagraphAnswer from '$lib/components/answers/ParagraphAnswer.svelte';
	import SelectionBoxAnswer from '$lib/components/answers/SelectionBoxAnswer.svelte';
	import ShortAnswer from '$lib/components/answers/ShortAnswer.svelte';
	import TimeAnswer from '$lib/components/answers/TimeAnswer.svelte';
	import type { Question } from '$lib/models/question.svelte';
	import { DateQuestion } from '$lib/models/questions/dateQuestion';
	import { MultipleChoiceQuestion } from '$lib/models/questions/multipleChoiceQuestion';
	import { ParagraphAnswerQuestion } from '$lib/models/questions/paragraphAnswerQuestion';
	import { SelectionBoxQuestion } from '$lib/models/questions/selectionBoxQuestion';
	import { ShortAnswerQuestion } from '$lib/models/questions/shortAnswerQuestion.svelte';
	import { TimeQuestion } from '$lib/models/questions/timeQuestion';

	const questions: Question[] = $state([]);

	function addNewQuestion(newQuestionType: string, position: number) {
		let newQuestion;

		switch (newQuestionType) {
			case 'short-answer':
				newQuestion = ShortAnswerQuestion.generateDefault();
				break;
			case 'paragraph-answer':
				newQuestion = ParagraphAnswerQuestion.generateDefault();
				break;
			case 'multiple-choice':
				newQuestion = MultipleChoiceQuestion.generateDefault();
				break;
			case 'selection-box':
				newQuestion = SelectionBoxQuestion.generateDefault();
				break;
			case 'date-answer':
				newQuestion = DateQuestion.generateDefault();
				break;
			case 'time-answer':
				newQuestion = TimeQuestion.generateDefault();
				break;
			default:
				console.error('unknown question type: ' + newQuestionType);
				return;
		}

		questions.push(newQuestion);
		$inspect(questions);
	}
</script>

<button onclick={() => addNewQuestion('paragraph-answer', 0)}>Paragraph</button>
<button onclick={() => addNewQuestion('multiple-choice', 0)}>Multiple Choice</button>
<button onclick={() => addNewQuestion('selection-box', 0)}>Selection Box</button>
<button onclick={() => addNewQuestion('date-answer', 0)}>Date</button>
<button onclick={() => addNewQuestion('time-answer', 0)}>Time</button>
<button onclick={() => addNewQuestion('short-answer', 0)}>Short</button>

{#each questions as questionData}
	{#if questionData instanceof ParagraphAnswerQuestion}
		<ParagraphAnswer {questionData} />
	{:else if questionData instanceof ShortAnswerQuestion}
		<ShortAnswer {questionData} />
	{:else if questionData instanceof MultipleChoiceQuestion}
		<MultipleChoiceAnswer {questionData} />
	{:else if questionData instanceof SelectionBoxQuestion}
		<SelectionBoxAnswer {questionData} />
	{:else if questionData instanceof DateQuestion}
		<DateAnswer {questionData} />
	{:else if questionData instanceof TimeQuestion}
		<TimeAnswer {questionData} />
	{/if}
{/each}

<!-- <ShortAnswer -->
<!-- 	questionData={new ShortAnswerQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: 'Question description', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098 -->
<!-- 	})} -->
<!-- ></ShortAnswer> -->
<!---->
<!-- <ShortAnswer -->
<!-- 	questionData={new ShortAnswerQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: '', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098 -->
<!-- 	})} -->
<!-- ></ShortAnswer> -->
<!---->
<!-- <ParagraphAnswer -->
<!-- 	questionData={new ShortAnswerQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: '', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098 -->
<!-- 	})} -->
<!-- ></ParagraphAnswer> -->
<!---->
<!-- <MultipleChoiceAnswer -->
<!-- 	questionData={new MultipleChoiceQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: 'Question description', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098, -->
<!-- 		options: ['a', 'b', 'c'] -->
<!-- 	})} -->
<!-- ></MultipleChoiceAnswer> -->
<!---->
<!-- <SelectionBoxAnswer -->
<!-- 	questionData={new SelectionBoxQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: 'Question description', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098, -->
<!-- 		options: ['a', 'b', 'c'] -->
<!-- 	})} -->
<!-- ></SelectionBoxAnswer> -->
<!---->
<!-- <DateAnswer -->
<!-- 	questionData={new DateQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: 'Question description', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098 -->
<!-- 	})} -->
<!-- ></DateAnswer> -->
<!---->
<!-- <TimeAnswer -->
<!-- 	questionData={new TimeQuestion({ -->
<!-- 		title: 'Question Title', -->
<!-- 		description: 'Question description', -->
<!-- 		required: true, -->
<!-- 		order: 0, -->
<!-- 		id: 3891098 -->
<!-- 	})} -->
<!-- ></TimeAnswer> -->
