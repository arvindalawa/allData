import { api, LightningElement } from 'lwc';
export default class ProductType extends LightningElement {
    value = '';
    selectedOption='';
    seletedType="other";
    @api isPopup;
    get options() {
        return [
            { label: 'Ancillary', value: 'option1' },
            { label: 'Resource Role', value: 'option2' },
            { label: 'Product', value: 'option3' },
            { label: 'Service', value: 'option4' },
        ];
    }
    changeHandle(event) {
         this.selectedOption = event.detail.value;
        console.log('Option selected with value: ' + this.selectedOption);
    }
    nextHandle(){
        console.log(this.selectedOption);
        if(this.selectedOption=="option1") this.seletedType='Ancillary'
        if(this.selectedOption=="option2") this.seletedType='Resource Role'
        if(this.selectedOption=="option3") this.seletedType='Product'
        if(this.selectedOption=="option4") this.seletedType='Service'
        // console.log(this.seletedType);
        if(this.seletedType!=='other'){

        }else{
            alert("Select any Option")
        }
    }
    cancelHandle(){
        this.isPopup=!this.isPopup
        const handleEdit=new CustomEvent("setispopup",{detail:this.isPopup});
        this.dispatchEvent(handleEdit);

    }
}
