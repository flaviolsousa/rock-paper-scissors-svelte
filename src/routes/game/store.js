// @ts-nocheck
import { writable } from 'svelte/store';
import { options, STATE_SELECTING, CYCLES_TO_SELECT } from './enums';

function getRandomOption(opts) {
	return opts[Math.floor(Math.random() * opts.length)];
}

export const points1 = writable(0);
export const points2 = writable(0);
export const selected1 = writable(null);
export const selected2 = writable(null);
export const state = writable(STATE_SELECTING);
export const counter = writable(CYCLES_TO_SELECT);

selected1.subscribe((option) => {
	if (!option) return;
	const win = options[option.win];
	const loss = options[option.loss];
	const opts = [option, win, win, loss, loss]; // draw = 20%    win/loss = 40%
	const selected = getRandomOption(opts);
	// console.log(`### p1=${option.id}  p2=${selected.id} (W=${win.id},L=${loss.id})`);
	selected2.set(selected);
});
