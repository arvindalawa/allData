import { LightningElement } from 'lwc';

export default class QuoteTabExample extends LightningElement {
	flag=false;//Id available or Not
   functionData={id:'tab-5__item',label:'Sprite',amount:'$ 30,000'};//user parameter
	tabsData = [
		{
			id: 'tab-1__item', label: 'COLA', amount: '$ 10,000',
		},
		{
			id: 'tab-2__item', label: 'Contingency', amount: '$ 10,000', activeClass: 'slds-is-active',
		},
		{
			id: 'tab-3__item', label: 'Quote Level Disc', amount: '$ 10,000',
		},
		{
			id: 'tab-4__item', label: 'Add-Ons Disc', amount: '$ 10,000',
		},
	];
	connectedCallback(){
		this.handleGetLable(this.functionData);
	}
	handleGetLable(functionData){
		for(let element of this.tabsData){
			if(element.id===functionData.id){
				element.label=functionData.label;
				element.amout=functionData.amount;
				this.flag=true;
			}
		}
		if(!this.flag){
			this.tabsData.push(this.functionData);
			// this.flag=true;
		}
	}
	handleTabChange(event) {
		const tabsContent = this.template.querySelectorAll('.slds-tabs_default__content');
		tabsContent.forEach((item) => {
			if (item.classList.contains('slds-show')) {
				item.classList.remove('slds-show');
				item.classList.add('slds-hide');
			}
		});
		const clickedContentId = event.detail;
		this.template.querySelector(`[id^=${clickedContentId}]`).classList.remove('slds-hide');
		this.template.querySelector(`[id^=${clickedContentId}]`).classList.add('slds-show');
	}
}
