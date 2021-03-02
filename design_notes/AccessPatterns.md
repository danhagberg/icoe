# Access Patterns

## Principal
Principal is the primary user who is asking for notification in case of emergency.  All data for the user will be 
tied to this entity. 

ID for principal (P_ID) is email address.

  * Get principal by P_ID (owner, admin)
  * Get contact info by P_ID (owner, admin)
  * Get list of Autos by P_ID (owner, admin)
  * Get emergency contacts by P_ID (owner,admin)
  * Get list of emergency contacts contact information (owner, admin)  
  * Get list of all principals (admin)

## Schedule
Schedules are entries indicating the duration or time until an event is triggered.
They may be ongoing or for a single event. The only difference, once the single event ends, then the schedule is 
removed.
* Get schedule