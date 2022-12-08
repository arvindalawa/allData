public with sharing class AccountController {
    public AccountController() {
        @AuraEnabled(cacheable=true)
        public static List<Contact> getAccount() {
            return [
                SELECT Name
                FROM Account
            ];
        }
    
}
}