import { ICuiPlugin, ICuiEventBus } from "cui-light-core/dist/esm/models/interfaces";
import { CuiUtils } from "cui-light-core/dist/esm/models/utils";
import { EVENTS } from "cui-light-core/dist/esm/utils/statics";

export class CuiWindowClickPlugin implements ICuiPlugin {
    description: string;
    name: string = 'click-plugin';
    setup: any;
    #bus: ICuiEventBus | undefined;
    #boundClick: (ev: MouseEvent) => void;

    constructor() {
        this.description = "CuiWindowClickPlugin";
        this.#bus = undefined;
        this.#boundClick = this.onWindowClick.bind(this);
    }

    init(utils: CuiUtils): void {
        this.#bus = utils.bus;
        window.addEventListener('click', this.#boundClick)
    }

    destroy(): void {
        window.removeEventListener('click', this.#boundClick);
    }

    onWindowClick(ev: MouseEvent) {
        if (this.#bus)
            this.#bus.emit(EVENTS.WINDOW_CLICK, null, ev)
    }
}