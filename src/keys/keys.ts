import { ICuiPlugin } from "cui-light-core/dist/esm/models/interfaces";
import { CuiUtils } from "cui-light-core/dist/esm/models/utils";
import { ICuiKeysObserver, CuiKeysObserver } from "./observer";


export interface CuiKeysObserverPluginSetup {
    autoPrint: boolean;
}

export class CuiKeysObserverPlugin implements ICuiPlugin {
    description: string;
    name: string = 'keys-observer';
    setup: CuiKeysObserverPluginSetup;
    #keysObserver: ICuiKeysObserver | undefined;
    constructor(keySetup: CuiKeysObserverPluginSetup) {
        this.description = "CuiKeysObserverPlugin";
        this.setup = keySetup;
        this.#keysObserver = undefined;
    }

    init(utils: CuiUtils): void {
        this.#keysObserver = new CuiKeysObserver(utils.bus);
        this.#keysObserver.connect();
    }

    destroy(): void {
        if (this.#keysObserver)
            this.#keysObserver.disconnect();
    }
}