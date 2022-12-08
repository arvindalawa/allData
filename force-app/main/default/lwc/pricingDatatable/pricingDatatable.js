import { api, LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import Table from '@salesforce/resourceUrl/Table';

const columns = [
	{
		label: '',
        fieldName: 'name',
        type: 'text', 
        editable: false, 
        initialWidth: 200, 
        cellAttributes: { class: { fieldName: 'updateClasses' } },

	},
	{
		label: 'Overall',
		fieldName: 'amount1',
		type: 'text',
		editable: true,
		initialWidth: 150,
		cellAttributes: { class: { fieldName: 'updateClasses' }, iconName: { fieldName: 'dynamicIcon' } },
	},
	{
		label: 'USA',
		fieldName: 'amount2',
		type: 'text',
		editable: true,
		initialWidth: 150,
		cellAttributes:
			{ class: { fieldName: 'updateClasses' }, iconName: { fieldName: 'dynamicIcon' } },
	},
	{
		label: 'India',
		fieldName: 'amount3',
		type: 'text',
		editable: true,
		initialWidth: 150,
		cellAttributes: { class: { fieldName: 'updateClasses' }, iconName: { fieldName: 'dynamicIcon', title: 'info' } },
	},
];

export default class QuotePricingDatatableExample extends LightningElement {
	columns = columns;
    @api tableData; 
	data ;
	async connectedCallback() {
        await loadStyle(this,`${Table}/quotePricingDatatable.css`);
        // Window.setTimeout(async function(){
            // this.data=await JSON.parse(await JSON.stringify(this.tableData));
            this.data = Object.assign([], this.tableData);
            // this.data=this.tableData;
        // },0);    
        await this.updateData(); 

	}
	async updateData() {
       try {
        console.log(this.data);
	this.data.forEach((element, index) => {
			if (element.highlightData) {
				const updatedObj = { ...element, updateClasses: 'provus-bg_blue' };
				this.data[index] = updatedObj;
                // element=updatedObj;
			}

			if (element.hasDoubleBorder) {
				const updatedObj = { ...element, updateClasses: 'provus-border_bottom' };
				this.data[index] = updatedObj;
			}

			if (element.highlightAndDoubleBorder) {
				const updatedObj = { ...element, updateClasses: 'provus-highlight-border_bottom' };
				this.data[index] = updatedObj;
			}

			if (element.name === '' && element.amount1 === '' && element.amount2 === '' && element.amount3 === '') {
				const updatedObj = { ...element, updateClasses: 'emptyRow' };
				this.data[index] = updatedObj;
			}

			if (element.name !== '' && element.amount1 !== '' && element.amount2 !== '' && element.amount3 !== '') {
				const updatedObj = { ...this.data[index], dynamicIcon: 'utility:info_alt' };
				this.data[index] = updatedObj;
			}
		});
    } catch (error) {
        console.log('Error in function',error);
    }
        // console.log(await this.data)
	}

}
