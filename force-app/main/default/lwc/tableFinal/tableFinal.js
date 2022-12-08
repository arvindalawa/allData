import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track cols = [
        {
            fieldName: '',
            label: 'Static Icon',
            cellAttributes: { iconName: 'standard:opportunity' }
        },
        {
            fieldName: '',
            label: 'Dynamic Icon',
            cellAttributes: { iconName: { fieldName: 'dynamicIcon' } }
        },
        {
            fieldName: 'name',
            label: 'Name'
        }
    ];
    @track data = [
        {
            id: 1, name: 'Opportunity 1', dynamicIcon: 'utility:up'
        },
        {
            id: 2, name: 'Opportunity 2', dynamicIcon: 'utility:down'
        }
    ]
}