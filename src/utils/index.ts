import * as moment from 'moment';

export const DATE_FORMAT = 'MM/DD/YYYY HH:mm';

export const parseToDate = (date: string) => {
  return moment(date, DATE_FORMAT).toDate();
};
