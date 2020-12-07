import { ICuiPlugin } from "cui-light-core/dist/esm/models/interfaces";
export interface CuiPluginsInit {
    autoLight: boolean;
    autoPrint: boolean;
}
export declare function GetPlugins(init: CuiPluginsInit): ICuiPlugin[];
