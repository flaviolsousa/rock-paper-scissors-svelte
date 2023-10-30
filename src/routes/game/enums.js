import paper1 from '$lib/images/paper-1.svg';
import paper2 from '$lib/images/paper-2.svg';
import rock1 from '$lib/images/rock-1.svg';
import rock2 from '$lib/images/rock-2.svg';
import scissor1 from '$lib/images/scissor-1.svg';
import scissor2 from '$lib/images/scissor-2.svg';

export const options = [
	{
		id: 0,
		alt: 'Paper Button',
		srcP1: paper1,
		srcP2: paper2,
		src: paper1,
		win: 1,
		loss: 2,
	},
	{
		id: 1,
		alt: 'Rock Button',
		srcP1: rock1,
		srcP2: rock2,
		src: rock2,
		win: 2,
		loss: 0,
	},
	{
		id: 2,
		alt: 'Scissor Button',
		srcP1: scissor1,
		srcP2: scissor2,
		src: scissor1,
		win: 0,
		loss: 1,
	},
];

export const CYCLES_TO_SELECT = 6;
export const CYCLES_TO_WATCH_RESULT = 5;
export const CYCLES_TOTAL = CYCLES_TO_SELECT + CYCLES_TO_WATCH_RESULT;

export const STATE_SELECTING = 0;
export const STATE_SCORING = 1;
export const states = [STATE_SELECTING, STATE_SCORING];
