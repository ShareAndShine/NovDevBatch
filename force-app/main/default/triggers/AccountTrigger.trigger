trigger AccountTrigger on Account (before insert, before update, before delete, after insert, after update, after delete) {


    if(Trigger.isCreate && Trigger.isAfter)
    {
        // Code to insert contacts
        AccountTriggerHandler.CreateContacts(Trigger.new);
    }
}