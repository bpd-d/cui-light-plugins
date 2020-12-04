import { ICuiEventBus } from "cui-light-core/dist/esm/models/interfaces";
export interface KeyDownEvent {
    timestamp: number;
    event: KeyboardEvent;
}
export interface ICuiKeysObserver {
    connect(): void;
    disconnect(): void;
}
export declare class CuiKeysObserver {
    #private;
    constructor(bus: ICuiEventBus);
    connect(): void;
    disconnect(): void;
    onKeyDown(ev: KeyboardEvent): void;
}
