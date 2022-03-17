import { priceRefinements } from "./priceRefinements";
import { raitingRefinements } from "./raitingRefinements";

export class FilterBlock {


    constructor() {
        this.priceRefinements = priceRefinements;
        this.raitingRefinements = raitingRefinements;
    }

    getPriceRefinements() {
        return this.priceRefinements;
    }

    getRaitingRefinements() {
        return this.raitingRefinements;
    }

    locator() {
        return '#s-refinements';
    }

}

export const filterBlock = new FilterBlock();