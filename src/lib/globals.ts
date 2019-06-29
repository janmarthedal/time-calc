import { DateTime } from 'luxon';

export const zoneLocal = DateTime.local().zoneName;
export const zoneUTC = DateTime.utc().zoneName;
