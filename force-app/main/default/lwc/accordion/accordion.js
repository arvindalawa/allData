import { LightningElement, api, track } from 'lwc';
import { data } from './accordion-data';

export default class LightningExampleAccordionMultiple extends LightningElement {
@track activeSections = [];
activeSectionsMessage = '';
@api accordion = [];
@track isVisible = false;

connectedCallback() {
	this.accordion = data;
}
handleSectionToggle(event) {
	const { openSections } = event.detail;
	if (openSections.length === 0) {
		this.activeSectionsMessage = 'All sections are closed';
	} else {
		this.activeSectionsMessage = `Open sections: ${openSections.join(', ')}`;
	}
}
getactiveSectionName() {
	for (let i = 0; i <= this.accordion.length; i++) {
		this.activeSections = this.accordion[i].activeSections;
	}
}
expandAll() {
	this.activeSections = ['A', 'B', 'C'];
}

collapseAll() {
	this.activeSections = [];
}
}
