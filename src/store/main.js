import { writable } from 'svelte/store';

export const options = writable(true);
export const board = writable(0);
export const score = writable(0);
export const wall = writable(false);
