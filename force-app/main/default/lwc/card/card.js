/* eslint-disable no-else-return */
/* eslint-disable getter-return */
import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import external_css from '@salesforce/resourceUrl/External_CSS'


export default class Basic extends LightningElement {
    @api haserror = false;
    @api haswarning = false;
    @api primaryvalue = '';
    @api secondaryvalue = '';

    connectedCallback() {
        loadStyle(this, external_css); 
        //you can add a .then().catch() if you'd like, as loadStyle() returns a promise
    }

    get getClass() {
        if (this.haserror && !this.haswarning) {
            return 'border-danger';
        } else if (!this.haserror && this.haswarning) {
            return 'border-warning';
        } else {
            return '';
        }
    }

    // eslint-disable-next-line consistent-return
    get isValueNull() {
        if (
            this.primaryvalue === '' &&
            this.secondaryvalue === ''
        ) {
            return true;
        }
    }
}