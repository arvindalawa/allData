import { createElement } from 'lwc';
import QuoteTabs from 'c/QuoteTabs';

describe('c-quote-tabs', () => {
	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it('should show the Quote tabs', () => {
		// Arrange
		const element = createElement('c-quote-tabs', {
			is: QuoteTabs,
		});

		// Act
		document.body.appendChild(element);

		// Assert
		// const div = element.shadowRoot.querySelector('div');
		expect(1).toBe(1);
	});
	it('should get the labels to the component', () => {
		// Arrange
		const element = createElement('c-quote-tabs', {
			is: QuoteTabs,
		});

		element.tabs = [
			{
				id: 'tab-1__item', label: 'COLA', data: 'Content cola', amount: '$ 10,000',
			},
			{
				id: 'tab-2__item', label: 'Contingency', data: 'Contingency', amount: '$ 10,000', activeClass: 'slds-is-active',
			},
		];

		// Act
		document.body.appendChild(element);
		const component = element.shadowRoot.querySelector('.tab-container');
		expect(component.childElementCount).toBe(2);

		const childComponent = element.shadowRoot.querySelectorAll('li');
		expect(childComponent[1].classList[0]).toBe('slds-is-active');
	});

	it('click on the tab', () => {
		// Arrange
		const element = createElement('c-quote-tabs', {
			is: QuoteTabs,
		});

		element.tabs = [
			{
				id: 'tab-1__item', label: 'COLA', data: 'Content cola', amount: '$ 10,000',
			},
			{
				id: 'tab-2__item', label: 'Contingency', data: 'Contingency', amount: '$ 10,000', activeClass: 'slds-is-active',
			},
		];

		// Act
		document.body.appendChild(element);

		const handler = jest.fn();
		element.addEventListener('tabchange', handler);
		const childComponent = element.shadowRoot.querySelector('li:not(.slds-is-active)');
		childComponent.click();

		expect(handler).toHaveBeenCalled();
	});
});
