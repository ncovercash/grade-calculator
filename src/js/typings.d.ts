interface SubmitEvent extends Event {
	submitter: HTMLElement;
}

interface HTMLFormElement {
	onsubmit: (this: GlobalEventHandlers, ev: SubmitEvent) => any | null;
}
