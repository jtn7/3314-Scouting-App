import { writable } from 'svelte/store';
export const fb = writable();
export const teamsTab = writable(true);
export const currentEvent = writable('');
export const events = writable([]);
export const teams = writable([]);