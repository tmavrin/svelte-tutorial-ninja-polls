import { writable } from 'svelte/store';

const PollStore = writable(
    [
		{
			id: 1,
			question: 'Python or JavaScript?',
			answerA: 'Python',
			answerB: 'JavaScript',
			votesA: 3,
			votesB: 6
		},
		{
			id: 2,
			question: 'Svelte or Vue?',
			answerA: 'Svelte',
			answerB: 'Vue',
			votesA: 2,
			votesB: 1
		}
	]
);

export default PollStore;