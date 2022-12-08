import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/ProductForm.Name';
// import WEBSITE_FIELD from '@salesforce/schema/ProductForm.ProductCode';
// import PHONE_FIELD from '@salesforce/schema/ProductForm.practice';
// import NUMBER_FIELD from '@salesforce/schema/ProductForm.group';

/**
 * Creates Account records.
 */
export default class AccountCreator extends LightningElement {
    accountObject = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
    websiteField = WEBSITE_FIELD;
    phoneField=PHONE_FIELD;
    numberField=NUMBER_FIELD;

    handleAccountCreated(){
        // Run code when account is created.
    }
}




















// import { LightningElement } from 'lwc';
// import addFormData from '@salesforce/apex/ProductFormData.addFormData';

// export default class ProductForm extends LightningElement {
//     value = '--None--';
//     productName='';
//     prductCode='';
//     practice='';
//     group='';
//     productFamily='';
//     active='';
//     recordTypeName='';
//     searchProducts='';
//     searchProduct='';
//     description='';
//     recordType='Soething record type';
//     get options() {
//         return [
//             { label: 'New', value: 'new' },
//             { label: '--None--', value: '--None--' },
//             { label: 'In Progress', value: 'inProgress' },
//             { label: 'Finished', value: 'finished' },
//         ];
//     }
//     handleProductName(event){
//         this.productName=event.target.value;
//     }
//     handleProductCode(event){
//          this.productCode=event.target.value;
//     }
//     handleChange(event) {
//         this.value = event.detail.value;
//         // product=event.target.value;
//     }
//     handlePractice(event){
//          this.practice=event.target.value;
//     }
//     handleGroup(event){
//         this.group= event.target.value;
//     }
//     handleFamily(event){
//         this.productFamily = event.target.value;
//     }
//     handleProduct(event){
//         this.searchProduct=event.target.value;
//     } 
//     handleProducts(event){
//         this.searchProducts=event.target.value;
//     }
//     handleActive(event){
//         this.active=event.target.checked;
//     }
//     handleDescription(event){
//         this.description=event.target.value;
//     }
//     handleCancel(){
//         console.log("You have click on Cancel button");
//     }
//     handleSaveAndNew(){
//         console.log("You click on Save and New Button");
//     }
//     handleSave(event){
//       if(this.productName==''){
//         alert("Fill the Product-Name field");
//       }else{
//         const formData={productName:this.productName,productCode:this.productCode,practice:this.practice,group:this.group,productFamily:this.productFamily,
//                         active:this.active,associatedProduct:this.searchProduct,searchProducts:this.searchProducts,description:this.description,recordType:this.recordType };
//                         console.log(formData);
//                         console.log(addFormData());
//       }
//     }
// }