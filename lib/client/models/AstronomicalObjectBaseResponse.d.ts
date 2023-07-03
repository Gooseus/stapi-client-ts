import type { AstronomicalObjectBase } from './AstronomicalObjectBase';
import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
/**
 * Response object for astronomical objects search
 */
export type AstronomicalObjectBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    astronomicalObjects?: Array<AstronomicalObjectBase>;
};
