import { api, LightningElement } from 'lwc';

export default class Card1 extends LightningElement {
   @api heading="test your Heading is showing in component";
   @api backColor="yellow"
    component="component"
    dealType="Fixed Bid"
    dealDuration="10 months"
    location="multiple"
}