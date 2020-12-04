import { ICuiPlugin } from "cui-light-core/dist/esm/models/interfaces";
import { CuiUtils } from "cui-light-core/dist/esm/models/utils";
import { CuiPropertiesHandler } from "./handler";
export interface CssChangeEvent {
    method: string;
    arg: any;
}
export interface CuiCSSVariablesPluginSetup {
}
export declare class CuiCSSVariablesPlugin implements ICuiPlugin {
    #private;
    description: string;
    name: string;
    setup: CuiCSSVariablesPluginSetup;
    handler: CuiPropertiesHandler | undefined;
    constructor(keySetup: CuiCSSVariablesPluginSetup);
    init(utils: CuiUtils): void;
    destroy(): void;
    onCssChange(event: CssChangeEvent): void;
    private isArgNumber;
    private isArgColor;
    private getBaseColorSetter;
    private getAccentColorSetter;
}
