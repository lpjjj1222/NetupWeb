import { ApiResponse } from '../domainModels/ApiResponse'; 
import { getEvent, usersToEventsByEvent} from '../graphql/queries';
import { EVENTSTATUS } from '../domainModels/domainEnums/OptionConstants';

export const GetEventDetails = async (client, eventId) => {
  try {
      const event = await client.graphql({
          query: getEvent,
          variables: { id: eventId }
      });
      console.log("EventController - successfully fetched event details", event?.data?.getEvent);
      return new ApiResponse(true, "EventController - successfully get event details by eventId", event?.data?.getEvent);
  }
  catch (exception) {
      console.log("EventController - failed to fetch event details", exception, eventId);
      return new ApiResponse(false, exception?.errors, null);
  }
}

export const GetEventAttendees = async (client, eventId) => {
  const usersToEventResp = await client.graphql({
      query: usersToEventsByEvent,
      variables: {
          event: eventId,
          filter: {
              status: { eq: EVENTSTATUS[1]?.enum },
          },
      },
  });
  const attendees = usersToEventResp?.data?.usersToEventsByEvent?.items;
  return attendees
}