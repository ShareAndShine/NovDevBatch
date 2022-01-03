public with sharing class ContactHelper Database.Batchable<sObject> {
   
    

    // Get all contacts that are 180 days old 
    public Database.QueryLocator start(Database.BatchableContext bc)
    {
        // Form a query that brings all contacts from the DB having days inactive > 180
        String query = 'SELECT ID, Name, Contact_Status__c, Last_Contacted_Date__c FROM Contact WHERE Days_Inactive__c > 180';
        return Database.getQueryLocator(query);
        
         
        
    }
    
    public void execute(Database.BatchableContext bc, List<Contact> contacts)
    {
		if (contacts != null)        
        {
            for(Contact con : contacts)
            {
                con.Contact_Status__c = 'Inactive';
            }
            
            update contacts;
        }
    }
    
    public void finish(Database.BatchableContext bc)
    {
		// Sending success or failure emails to admins    
		// Removed - 5th change
		// // Send email method which sends out email after the completion of job - 2nd change
		// Also create a task to admin to look at ourput in APEX jobs - 3rd change
    }
}
