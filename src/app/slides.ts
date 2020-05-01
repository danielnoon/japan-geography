import { Slide } from "./Slide";

function id<T extends HTMLElement>(id: string) {
    return document.querySelector<T>(id)!;
}

export const slides = [
    new Slide(id<HTMLDivElement>('#slide-1'), (slide, state, next) => {
        state.setMapCenter([138, 32], 4);
    }, (slide, state, next) => {}),
    new Slide(id<HTMLDivElement>('#slide-section-islands'), (slide, state, next) => {
        state.setMapCenter([138, 36], 4.5);
    }, (slide, state, next) => {}),
    new Slide(id<HTMLDivElement>('#slide-hokkaido'), (slide, state, next) => {
        state.setMapCenter([142, 43], 6);
    }, (slide, state, next) => {}),
    new Slide(id<HTMLDivElement>('#slide-honshu'), (slide, state, next) => {
        state.setMapCenter([138, 36], 5);
    }, (slide, state, next) => {}),
    new Slide(id<HTMLDivElement>('#slide-kyushu'), (slide, state, next) => {
        state.setMapCenter([131, 33], 7);
    }, (slide, state, next) => {}),
    new Slide(id<HTMLDivElement>('#slide-shikoku'), (slide, state, next) => {
        state.setMapCenter([133.5, 33.75], 7);
    }, (slide, state, next) => {}),
]