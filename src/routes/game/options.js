import paper1 from '$lib/images/paper-1.svg';
import paper2 from '$lib/images/paper-2.svg';
import rock1 from '$lib/images/rock-1.svg';
import rock2 from '$lib/images/rock-2.svg';
import scissor1 from '$lib/images/scissor-1.svg';
import scissor2 from '$lib/images/scissor-2.svg';

export const options = [
	{ src: paper1, srcP1: paper1, srcP2: paper2, alt: 'Paper Button', id: 0, win: 1 },
	{ src: rock2, srcP1: rock1, srcP2: rock2, alt: 'Rock Button', id: 1, win: 2 },
	{ src: scissor1, srcP1: scissor1, srcP2: scissor2, alt: 'Scissor Button', id: 2, win: 0 },
];
