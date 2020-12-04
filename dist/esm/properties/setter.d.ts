import { CuiUtils } from "cui-light-core/dist/esm/models/utils";
export interface PropertySet {
    [property: string]: string;
}
export declare class PropertySetter {
    #private;
    constructor(utils: CuiUtils);
    setProperty(property: string, value: string): void;
    setProperties(set: PropertySet): void;
}
