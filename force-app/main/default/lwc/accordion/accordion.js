import { LightningElement, api, track } from 'lwc';
import { data } from './accordion-data';

export default class LightningExampleAccordionMultiple extends LightningElement {
@track activeSections = [];
activeSectionsMessage = '';
@api accordion = [];
@track isVisible;
@track clickedButtonLabel = 'utility:chevrondown';

// handleClick funcion will expand and collapse the comonent on button toggle
handleClick(event) {
	if (!this.activeSections.length) {
		this.activeSections = [];
		this.accordion.forEach((item) => {
			if (item.id == event.target.dataset.id) {
				this.clickedButtonLabel = 'utility:chevronup';
				item.accordionData.forEach((accord) => {
					this.activeSections.push(accord.name);
				});
			}
		});
	} else {
		this.clickedButtonLabel = 'utility:chevrondown';
		this.activeSections = [];
	}
}

connectedCallback() {
	this.accordion = data;
	this.getActiveSections();
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
