import { Slide } from "./Slide";
import { wait } from "./util";

function id<T extends HTMLElement>(id: string) {
  return document.querySelector<T>(id)!;
}

export const slides = [
  new Slide(
    id<HTMLDivElement>("#slide-1"),
    (slide, state, next) => {
      state.setMapCenter([138, 32], 4);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-section-islands"),
    (slide, state, next) => {
      state.setMapCenter([138, 36], 4.5);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-hokkaido"),
    (slide, state, next) => {
      state.setMapCenter([142, 43], 6);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-honshu"),
    (slide, state, next) => {
      state.setMapCenter([138, 36], 5);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-kyushu"),
    (slide, state, next) => {
      state.setMapCenter([131, 33], 7);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-shikoku"),
    (slide, state, next) => {
      state.setMapCenter([133.5, 33.75], 7);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-section-geography"),
    (slide, state, next) => {},
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-physical-geography"),
    (slide, state, next) => {},
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-climate-variety"),
    (slide, state, next) => {
      state.showBackground("assets/mountains.jpg");
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-seismic-activity"),
    (slide, state, next) => {
      state.showBackground("assets/tsunami.jpg");
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-volcanism"),
    (slide, state, next) => {
      state.showBackground("assets/sakurajima.jpg");
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-section-culture"),
    (slide, state, next) => {
      state.showBackground("assets/torii.jpg");
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-section-fuji"),
    async (slide, state, next) => {
      state.setMapCenter([138.731111, 35.358056], 13, 5000);
      await wait(5250);
      state.showBackground("assets/fuji-aerial.jpg");
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-fuji"),
    async (slide, state, next) => {},
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-fuji-art"),
    async (slide, state, next) => {},
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-section-shinto"),
    async (slide, state, next) => {
      state.setMapCenter([136.725833, 34.455], 17);
    },
    (slide, state, next) => {}
  ),
  new Slide(
    id<HTMLDivElement>("#slide-shinto"),
    async (slide, state, next) => {
      state.setMapCenter([136.725833, 34.455], 17);
    },
    (slide, state, next) => {}
  ),
];
