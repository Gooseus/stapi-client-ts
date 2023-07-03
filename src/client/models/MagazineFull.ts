/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyBase } from './CompanyBase';
import type { MagazineSeriesBase } from './MagazineSeriesBase';
import type { StaffBase } from './StaffBase';

/**
 * Full magazine, returned when queried using UID
 */
export type MagazineFull = {
    /**
     * Magazine unique ID
     */
    uid: string;
    /**
     * Magazine title
     */
    title: string;
    /**
     * Year the magazine was published
     */
    publishedYear?: number;
    /**
     * Month the magazine was published
     */
    publishedMonth?: number;
    /**
     * Day the magazine was published
     */
    publishedDay?: number;
    /**
     * Cover publication year
     */
    coverYear?: number;
    /**
     * Cover publication month
     */
    coverMonth?: number;
    /**
     * Cover publication day
     */
    coverDay?: number;
    /**
     * Number of pages
     */
    numberOfPages?: number;
    /**
     * Magazine issue number
     */
    issueNumber?: string;
    /**
     * Magazine series this magazine is included in
     */
    magazineSeries?: Array<MagazineSeriesBase>;
    /**
     * Editors involved in the magazine
     */
    editors?: Array<StaffBase>;
    /**
     * Magazine publishers
     */
    publishers?: Array<CompanyBase>;
};

