import { LightningElement, api, track } from 'lwc';
import { data } from './accordion-data';

export default class LightningExampleAccordionMultiple extends LightningElement {
@track activeSections = [];
@api accordion = [];
@track isVisible;

connectedCallback() {
	this.accordion = data;

	if (this.accordion && this.accordion.length) {
		this.accordion.forEach((item) => {
			if (item.accordionData.length > item.activeSections.length) {
				item.buttonLabel = 'utility:chevrondown';
			} else if (item.accordionData.length == item.activeSections.length) {
				item.buttonLabel = 'utility:chevronup';
			}
		});
	}

	this.getActiveSections();
}

// handleSectionToggle is a function to expand and collapse component
handleSectionToggle(event) {
	this.accordion.forEach((item) => {
		if (item.id == event.target.dataset.id) {
			const { openSections } = event.detail;
			if (openSections.length === 0) {
				item.buttonLabel = 'utility:chevrondown';
			} else {
				item.buttonLabel = 'utility:chevronup';
			}
		}
	});
}

// handleClick funcion will expand and collapse the comonent on button toggle
handleClick(event) {
	this.accordion.forEach((item) => {
		if (item.id == event.target.dataset.id) {
			if (item.buttonLabel == 'utility:chevrondown') {
				item.accordionData.forEach((accord) => {
					this.activeSections = [...this.activeSections, accord.name];
				});
				item.buttonLabel = 'utility:chevronup';
			} else if (item.buttonLabel == 'utility:chevronup') {
				item.accordionData.forEach((accord) => {
					this.activeSections = this.activeSections.filter((value) =>	value != accord.name);
				});
				item.buttonLabel = 'utility:chevrondown';
			}
		}
	});
}

// getactiveSectionName will return active section name
getactiveSectionName() {
	for (let i = 0; i <= this.accordion.length; i++) {
		this.activeSections = this.accordion[i].activeSections;
	}
}
// getActiveSections will get active section names form data and will show those components by default expanded
getActiveSections() {
	this.activeSections = [];
	this.accordion.forEach((activeItem) => {
		if (activeItem.isVisible === true) {
			if (activeItem.activeSections.length) {
				this.activeSections = [...this.activeSections, ...activeItem.activeSections];
			} else {
				activeItem.accordionData.forEach((accord) => {
					this.activeSections.push(accord.name);
				});
			}
		}
	});
}
}
