public with sharing class carSearchResultController {
   

    @AuraEnabled(cacheable=true) // add this to make it available for LWC code consumption
    public static List<Car__c> getCars(String carTypeID)
    {
                  
        if(String.IsEmpty(carTypeID))
        {
            //Query all cars
            return [SELECT Id, Name,Picture__c,Car_Type__c,Geolocation__latitude__s,Geolocation__longitude__s,Contact__r.Name FROM Car__c];
        }
        else {
            // Quert only cars for the selected car type
            return [SELECT Id, Name,Picture__c,Car_Type__c,Geolocation__latitude__s,Geolocation__longitude__s,Contact__r.Name 
            FROM Car__c WHERE Car_Type__c =: carTypeID]; 
        }   
    }
}
