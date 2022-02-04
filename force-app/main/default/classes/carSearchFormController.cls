public with sharing class carSearchFormController {
    
   // Aura enabled enables a method to be used in LWC
    @AuraEnabled(cacheable=true)    
    public static List<Car_Type__c> getCarTypes()
        {
            return [SELECT ID,Name FROM Car_Type__c];
        }
    

    public static void dummy()
    {

    }
}
