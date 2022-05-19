import { LightningElement, api } from 'lwc';

export default class Progress extends LightningElement {
    @api progress = 0;
    @api size = 'large';
}