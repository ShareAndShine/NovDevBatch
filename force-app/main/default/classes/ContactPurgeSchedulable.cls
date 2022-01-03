global class ContactPurgeSchedulable implements Schedulable {
   global void execute(SchedulableContext sc) {
    ContactHelper oContactBatch = new ContactHelper();
      database.executebatch(oContactBatch);
   }
}


