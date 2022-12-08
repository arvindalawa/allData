import { LightningElement } from 'lwc';

export default class Tabset extends LightningElement {
    firstActive;
    count=0;
    labels=[
        {id:'tab-default-1item',id2:'tab-default-1',label:"COLA",data:"Content cola",amount:"$ 10,000"},
        {id:'tab-default-2item',id2:'tab-default-2',label:"Contingency",data:"Contingency",amount:"$ 10,000"},
        {id:'tab-default-3item',id2:'tab-default-3',label:"Quote Level Disc",data:"Quote Level Disc",amount:"$ 10,000"},
        {id:'tab-default-4item',id2:'tab-default-4',label:"Add-Ons Disc",data:"Add-Ons Disc",amount:"$ 10,000",isActive:true},
        {id:'tab-default-5item',id2:'tab-default-5',label:"Labor Disc - By Location",data:"Labor Disc - By Location",amount:"$ 10,000"},
        {id:'tab-default-6item',id2:'tab-default-6',label:"Labor Disc - By Volume",data:"Labor Disc - By Volume",amount:"$ 10,000"}
 ]
 renderedCallback(){
    for(let item of this.labels){
        if('isActive' in item){
            console.log(this.template.querySelector('#item.id2'))
            this.firstActive=this.template.querySelector(`#${item.id2}-12`);
            this.firstActive.classList.remove('slds-hide');
            this.firstActive.classList.add('slds-show');
            this.active=this.template.querySelector(`#${item.id}-12`);
            this.active.classList.remove('slds-is-active');
            this.active.classList.add('slds-is-active');
            this.count++;
            break; 
        }
    }
    if(this.count===0){
        this.firstActive=this.template.querySelector('#tab-default-1-12');
        // console.log(this.template.querySelector('#tab-default-1-12'));
        this.firstActive.classList.remove('slds-hide');
        this.firstActive.classList.add('slds-show');
        this.active=this.template.querySelector(`#tab-default-1item-12`);
        this.active.classList.remove('slds-is-active');
        this.active.classList.add('slds-is-active');
    }
 }
    tabClick(e) {
        const allTabs = this.template.querySelectorAll('ul>li');
        allTabs.forEach((elm) => {
            elm.classList.remove('slds-is-active');
        });
        e.currentTarget.classList.add('slds-is-active');
        const tabsContent = this.template.querySelectorAll('.slds-tabs_defaultcontent');
        tabsContent.forEach((item) => {
            if (item.classList.contains('slds-show')) {
                item.classList.remove('slds-show');
                item.classList.add('slds-hide');
            }
        });
        const clickedContentId = e.currentTarget.id.replace('item', '');
        this.template.querySelector(`#${clickedContentId}`).classList.remove('slds-hide');
        this.template.querySelector(`#${clickedContentId}`).classList.add('slds-show');
    }
}