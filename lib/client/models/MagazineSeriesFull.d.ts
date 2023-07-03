import type { CompanyBase } from './CompanyBase';
import type { MagazineBase } from './MagazineBase';
import type { StaffBase } from './StaffBase';
/**
 * Full magazine series, returned when queried using UID
 */
export type MagazineSeriesFull = {
    /**
     * Magazine series unique ID
     */
    uid: string;
    /**
     * Magazine series title
     */
    title: string;
    /**
     * Year from which the magazine series was published
     */
    publishedYearFrom?: number;
    /**
     * Month from which the magazine series was published
     */
    publishedMonthFrom?: number;
    /**
     * Year to which the magazine series was published
     */
    publishedYearTo?: number;
    /**
     * Month to which the magazine series was published
     */
    publishedMonthTo?: number;
    /**
     * Number of issues
     */
    numberOfIssues?: number;
    /**
     * Companies that published this magazine series
     */
    publishers?: Array<CompanyBase>;
    /**
     * Editors involved in the magazine series
     */
    editors?: Array<StaffBase>;
    /**
     * Magazines included in this magazine series
     */
    magazines?: Array<MagazineBase>;
};
