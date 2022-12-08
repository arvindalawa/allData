import { LightningElement, track } from 'lwc';

//Let's configure the columns of the data table
const columns = [
    //Key here is cellAttributes object for Particular column
    {label: 'Name', fieldName: 'name', type: 'text',editable:true,cellAttributes: { class: { fieldName: 'fvtColorCSSClass' }}},
    //Diet type column can accept a css class. The css class name should be passed in field name "dietClass" from server
    {label: 'Diet Type', fieldName: 'diet', type: 'text', cellAttributes: { class: { fieldName: 'fvtColorCSSClass' }}},
    {label: 'Blood Group', fieldName: 'bloodGroup', type: 'text', cellAttributes: { class: { fieldName: 'fvtColorCSSClass' }}},
    //likewise fvtColor column can also have a css class in fvtColorCSSClass field
    {label: 'Favourite Color', fieldName: 'fvtColor', type: 'text', cellAttributes: { class: { fieldName: 'fvtColorCSSClass' }}},
    //and working column can have a css class in workingCSSClass field
    {label: 'Working', fieldName: 'working', type: 'boolean', cellAttributes: { class: { fieldName: 'fvtColorCSSClass' }}},
    // {cellAttributes:{class:{fieldName:'rowClass'}}}
];
export default class ColorColumnDataTable extends LightningElement {
    @track data = [];
    @track columns = columns;

    connectedCallback(){
        const data = [];
        data.push({name : 'Manish', diet : 'Vegeterian', bloodGroup : 'AB+', 
                   fvtColor : 'Blue', working : true,fvtColorCSSClass : 'slds-color__background_gray-7'})
        data.push({name : 'Peter', diet : 'Non-Vegeterian', bloodGroup : 'B+', 
                   fvtColor : 'Grey', working : true,});
        data.push({name : 'Alex', diet : 'Non-Vegeterian', bloodGroup : 'A-', 
                   fvtColor : 'Blue', fvtColorCSSClass : 'slds-icon-custom-custom9', working : false});
        data.push({name : 'Shane', diet : 'Non-Vegeterian',  bloodGroup : 'O+', 
                   fvtColor : 'Green', fvtColorCSSClass : 'slds-icon-custom-custom79', working : true});
        data.push({name : 'Malisa', diet : 'Vegeterian', dietCSSClass : 'slds-text-color_success', bloodGroup : 'AB-', 
                   fvtColor : 'Orange', fvtColorCSSClass : 'slds-icon-custom-custom102', working : false, });
        data.push({name : 'Angelina', diet : 'Vegeterian', bloodGroup : 'AB+', 
                   fvtColor : 'Pink', fvtColorCSSClass : 'slds-icon-custom-custom24', working : false});
        data.push({name : 'Liana', diet : 'Non-Vegeterian', bloodGroup : 'B+', 
                   fvtColor : 'Cyan', fvtColorCSSClass : 'slds-icon-custom-custom20', working : false});
        data.push({name : 'Holly', diet : 'Vegeterian', bloodGroup : 'B-', 
                   fvtColor : 'Grey', fvtColorCSSClass : 'slds-color__background_gray-7', working : true, });
        data.push({name : 'Rick', diet : 'Vegeterian', bloodGroup : 'A+', 
                   fvtColor : 'Grey', fvtColorCSSClass : 'slds-color__background_gray-7', working : true});
        
        this.data = data;
    }
}