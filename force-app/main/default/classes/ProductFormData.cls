public with sharing class ProductFormData {
    @auraEnabled
   public static String addFormData(String formData){
    // SObject data = (Sobject) Type.forName('productForm__c').newInstance();
    // data.put('Name', formData.productName);
    // data.put('productCode__c', formData.productCode);
    // data.put('practice__c', formData.practice);
    // data.put('group__c', formData.group);
    // data.put('active__c', formData.active);
    // data.put('products__c', formData.searchProducts);
    // data.put('description__c', formData.description);
    // data.put('recordType__c', formData.recordType);
    // data.put('associatedProduct__c', formData.associatedProduct);
    // data.put('productFamily__c', formData.productFamily);
    // insert data;
    return 'addFormData method invoked';
   }
}
