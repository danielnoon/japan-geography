import { SlideType } from "./SlideType";
import { State } from "./State";

export class Slide {
    constructor(
        public slide: HTMLDivElement,
        public moveTo: (slide: HTMLDivElement, state: State, previous?: Slide) => void | Promise<void>,
        public moveFrom: (slide: HTMLDivElement, state: State, next?: Slide) => void | Promise<void>
    ) {}
}
