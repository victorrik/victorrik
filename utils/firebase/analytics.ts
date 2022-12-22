import { AnalyticsCallOptions, logEvent } from "firebase/analytics";
import { analytics } from "./config";

type EventName = "page_view";
export const makeEvent = (eventName:EventName, dataEvent?: any, options?:AnalyticsCallOptions)=>{
	if (dataEvent) {
		logEvent(analytics,eventName,dataEvent);
	} 
}