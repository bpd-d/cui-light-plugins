import { ICuiPlugin } from "cui-light-core/dist/esm/models/interfaces";
import { CuiUtils } from "cui-light-core/dist/esm/models/utils";
export declare class CuiWindowClickPlugin implements ICuiPlugin {
    #private;
    description: string;
    name: string;
    setup: any;
    constructor();
    init(utils: CuiUtils): void;
    destroy(): void;
    onWindowClick(ev: MouseEvent): void;
}
