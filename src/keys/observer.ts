import { ICuiEventBus } from "cui-light-core/dist/esm/models/interfaces";
import { CuiKeyPressListener } from "cui-light-core/dist/esm/listeners/keys";
import { EVENTS } from "cui-light-core/dist/esm/utils/statics";
export interface KeyDownEvent {
    timestamp: number;
    event: KeyboardEvent;
}
export interface ICuiKeysObserver {
    connect(): void;
    disconnect(): void;
}
export class CuiKeysObserver {
    #listener: CuiKeyPressListener;
    #bus: ICuiEventBus
    constructor(bus: ICuiEventBus) {
        this.#bus = bus;
        this.#listener = new CuiKeyPressListener(true);
        this.#listener.setCallback(this.onKeyDown.bind(this))
    }
    connect(): void {
        this.#listener.attach();
    }
    disconnect(): void {
        this.#listener.detach();
    }

    onKeyDown(ev: KeyboardEvent) {
        this.#bus.emit(EVENTS.KEYDOWN, null, {
            timestamp: Date.now(),
            event: ev
        })
    }

}