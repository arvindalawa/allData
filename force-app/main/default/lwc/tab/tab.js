import {LightningElement } from 'lwc';

export default class Tab extends LightningElement {
 labels=[
        {id:1,label:"COLA",data:"Content cola",amount:"$ 10,000"},
        {id:2,label:"Contingency",data:"Contingency",amount:"$ 10,000"},
        {id:3,label:"Quote Level Disc",data:"Quote Level Disc",amount:"$ 10,000"},
        {id:4,label:"Add-Ons Disc",data:"Add-Ons Disc",amount:"$ 10,000"},
        {id:5,label:"Labor Disc - By Location",data:"Labor Disc - By Location",amount:"$ 10,000"},
        {id:6,label:"Labor Disc - By Volume",data:"Labor Disc - By Volume",amount:"$ 10,000"}
 ]
 activeTab = '1';
    get bDisableBackBtn(){
        return Number(this.activeTab) === 1 ? true : false;
    }
    get bDisableNextBtn(){
        return Number(this.activeTab) === 6 ? true : false;
    }
    // JS functions start 
    handleActive(event) {
     this.activeTab = event.target.value;
     console.log(this.activeTab)
    }
}