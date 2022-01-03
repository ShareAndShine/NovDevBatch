global class ContactPurgeSchedulable implements Schedulable {
   global void execute(SchedulableContext sc) {
    ContactHelper b = new ContactHelper();
      database.executebatch(b);
   }
}


