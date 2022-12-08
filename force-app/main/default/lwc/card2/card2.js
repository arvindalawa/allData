import { api, LightningElement } from 'lwc';

export default class Card2 extends LightningElement {
   @api heading="test2 is here to test";
   @api fromComponent;
}