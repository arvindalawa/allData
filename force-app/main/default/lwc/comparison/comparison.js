import { LightningElement, api, wire } from 'lwc';

import getAllAccounts from '@salesforce/apex/GetRecordDataController.getAllAccounts';

import { columns } from './comparison-data';

export default class Grid extends LightningElement {
    @api comparison = []

    @api records;
    @api errors;


    @wire(getAllAccounts,{
    }
   )
   wiredCases({
       data,error
   }){
   if(data){
       this.records = data;
       console.log('data', data);
       
       this.errors = undefined;
   }
   if(error){
       this.errors = error;
       this.records = undefined;
       }
   }

   connectedCallback() {
       this.comparison = columns;
   }

    get getComparisonData() {
        const refactoredData = [];
        let comparison = [...this.comparison];
        comparison.map(function (vals) {
            const val = { ...vals };
            const refactorVal = [];
            let isIconList = false;
            val.dataColumn.map(function (items) {
                const item = { ...items };
                if (item.type === 'icon') {
                    isIconList = true;
                    item.isIcon = true;
                } else if (item.type === 'card') {
                    item.isCard = true;
                } else if (item.type === 'header') {
                    item.isHeader = true;
                } else if (item.type === 'progress') {
                    item.isProgress = true;
                } else if (item.type === 'text') {
                    item.isText = true;
                }
                refactorVal.push(item);
            });
            refactoredData.push({
                ...val,
                isIconList: isIconList,
                dataColumn: refactorVal
            });
        });
        return refactoredData;
    }
}