import { LightningElement, api } from 'lwc';

export default class Tabset extends LightningElement {
	@api tabs= [];

	renderedCallback() {
		const allTabs = this.template.querySelectorAll('.tab-container > li');
		allTabs.forEach((tabListElement) => {
			if (tabListElement.classList.contains('slds-is-active')) {
				const activeId = tabListElement.id.split('__item')[0];

				this.handleTabChange(activeId);
			}
		});
	}

	handleTabClick(e) {
		const allTabs = this.template.querySelectorAll('.tab-container > li');
		allTabs.forEach((tabListElement) => {
			tabListElement.classList.remove('slds-is-active');
		});
		e.currentTarget.classList.add('slds-is-active');

		const activeId = e.currentTarget.id.split('__item')[0];

		this.handleTabChange(activeId);
	}

	handleTabChange(id) {
		const event = new CustomEvent('tabchange', {
			// detail contains only active id
			detail: id,
		});

		this.dispatchEvent(event);
	}
}
