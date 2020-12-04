import { ICuiPlugin } from "cui-light-core/dist/esm/models/interfaces";
import { CuiUtils } from "cui-light-core/dist/esm/models/utils";
import { getSystemLightMode } from "cui-light-core/dist/esm/utils/functions";
import { CuiMediaQueryListener } from "cui-light-core/dist/esm/listeners/media";

export interface AutoLightPluginSetup {
    autoLight: boolean;
}

export class CuiAutoLightModePlugin implements ICuiPlugin {
    description: string = 'Dark vs Light mode auto switcher';
    name: string = 'auto-light';
    setup: AutoLightPluginSetup;
    #listener: CuiMediaQueryListener | undefined;
    #utils: CuiUtils | undefined;
    constructor(autoLightInit: AutoLightPluginSetup) {
        this.description = "CuiAutoLightModePlugin";
        this.setup = autoLightInit;
        this.#utils = undefined;
        this.#listener = undefined
    }

    init(utils: CuiUtils): void {
        this.#utils = utils
        if (this.setup.autoLight && getSystemLightMode() === 'dark') {
            this.#utils.setLightMode('dark')
        }
        this.#listener = new CuiMediaQueryListener('(prefers-color-scheme: dark)')
        this.#listener.setCallback(this.onChange.bind(this))
        this.#listener.attach();
    }

    destroy(): void {
        if (this.#listener)
            this.#listener.detach();
    }

    onChange(ev: MediaQueryListEvent) {
        if (!this.#utils) {
            return;
        }
        let autoLightSetup = this.#utils.setup.plugins[this.description] as AutoLightPluginSetup;
        let autoLight = autoLightSetup?.autoLight ?? false;
        if (autoLight) {
            if (ev.matches) {
                this.#utils.setLightMode('dark')
            } else {
                this.#utils.setLightMode('light')
            }
        }
    }

}