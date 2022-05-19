import { LightningElement, api } from 'lwc';

export default class Basic extends LightningElement {
    @api heading;
    @api createdby;
    @api badgetext;
}