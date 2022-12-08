import { LightningElement, track } from 'lwc';

export default class ProductComponent extends LightningElement {
    @track isPopup=false;
    handlePopup(){
this.isPopup=!this.isPopup;
    }
}