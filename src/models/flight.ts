import { ObjectId } from "mongodb";

export default class Flight {
    constructor(
        public airline: string,
        public airlineid: number,
        public airlinename: string,
        public codeshare: string,
        public date: Date, 
        public destairport: string,
        public destairportid: number,
        public destairportname: string, 
        public destcity: string,
        public destcountry: string,
        public eq: string,
        public price: number,
        public srcairport: string,
        public srcairportid: number, 
        public srcairportname: string,
        public srccity: string,
        public srccountry: string,
        public stop: number,
        public id?: ObjectId
    ) {}
}