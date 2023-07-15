import { ObjectId } from "mongodb";

export default class Hotel {
    constructor(
        public city: string,
        public date: Date,
        public hotelName: string,
        public price: number,
        public id?: ObjectId
    ) {}
}