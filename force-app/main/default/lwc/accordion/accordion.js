import { LightningElement, api, track } from 'lwc';
import { data } from './accordion-data';

export default class LightningExampleAccordionMultiple extends LightningElement {
@track activeSections = [];
activeSectionsMessage = '';
@api accordion = [];
@track isVisible;
@track clickedButtonLabel = 'utility:chevrondown';

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
getactiveSectionName() {
	for (let i = 0; i <= this.accordion.length; i++) {
		this.activeSections = this.accordion[i].activeSections;
	}
}
getActiveSections(event) {
	this.activeSections = [];
	this.accordion.forEach((activeItem) => {
		if (activeItem.isVisible === true) {
			this.activeSections = [...this.activeSections, ...activeItem.activeSections];
		} else if (activeItem.isVisible === true && activeItem.activeSections.length === 0) {
			this.activeSections = [];
			this.accordion.forEach((item) => {
				if (item.id == event.target.dataset.id) {
					item.accordionData.forEach((accord) => {
						this.activeSections.push(accord.name);
					});
				}
			});
		}
	});
}
}
