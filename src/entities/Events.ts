import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event {
    constructor(
        public title: string,
        public location: Location,
        public data: Date,
        public description: string,
        public bunner: string,
        public coupons: string[],
        public participants: User[],
        public price: Price[],
        public city: string
    ){

    }
}

export {Event}