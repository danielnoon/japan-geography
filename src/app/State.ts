import { Map } from "mapbox-gl";

export class State {
    private isMap: boolean;
    private currBg = 1;
    constructor(
        private map: Map,
        private background1: HTMLDivElement,
        private background2: HTMLDivElement
    ) {
        this.isMap = true;
    }

    setMapCenter(center: [number, number], zoom = 5, duration = 3000) {
        this.map.flyTo({ center, duration, zoom });
    }
}