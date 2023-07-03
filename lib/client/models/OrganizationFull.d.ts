import type { CharacterBase } from './CharacterBase';
/**
 * Full organization, returned when queried using UID
 */
export type OrganizationFull = {
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
     * Whether this organization is from alternate reality
     */
    alternateReality?: boolean;
    /**
     * Characters belonging to this organization
     */
    characters?: Array<CharacterBase>;
};
