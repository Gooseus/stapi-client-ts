/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base organization, returned in search results
 */
export type OrganizationBase = {
    /**
     * Organization unique ID
     */
    uid: string;
    /**
     * Organization name
     */
    name: string;
    /**
     * Whether it's a government
     */
    government?: boolean;
    /**
     * Whether it's an intergovernmental organization
     */
    intergovernmentalOrganization?: boolean;
    /**
     * Whether it's a research organization
     */
    researchOrganization?: boolean;
    /**
     * Whether it's a sport organization
     */
    sportOrganization?: boolean;
    /**
     * Whether it's a medical organization
     */
    medicalOrganization?: boolean;
    /**
     * Whether it's a military organization
     */
    militaryOrganization?: boolean;
    /**
     * Whether it's a military unit
     */
    militaryUnit?: boolean;
    /**
     * Whether it's a government agency
     */
    governmentAgency?: boolean;
    /**
     * Whether it's a law enforcement agency
     */
    lawEnforcementAgency?: boolean;
    /**
     * Whether it's a prison or penal colony
     */
    prisonOrPenalColony?: boolean;
    /**
     * Whether this organization is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this location is from alternate reality
     */
    alternateReality?: boolean;
};

