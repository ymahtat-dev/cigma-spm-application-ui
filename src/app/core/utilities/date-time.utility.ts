import moment from "moment";

export class DateTimeUtility {

    public static isEndDateAfterStartDate(startDate: Date, endDate: Date): boolean {
        return moment(endDate).isAfter(startDate);
    }

    public static addDaysToDate(date: Date, days: number): Date {
        return moment(date).add(days, 'days').toDate();
    }

}
