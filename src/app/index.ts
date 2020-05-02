import mapboxgl, { Map } from "mapbox-gl";
import { State } from "./State";
import { slides } from "./slides";
import { wait } from "./util";
import { Slide } from "./Slide";
import { playEntranceAnimations } from "./animation";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3VwZXJtZWdhZGV4IiwiYSI6ImNqNnc4c242NDFjcG0zMm56MzlqMDk1czMifQ.gFotKrTtsriSfvGxKVzsoA";

const map = new Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-v9",
  center: [-100, 40],
  zoom: 3,
});

const state = new State(
  map,
  document.querySelector<HTMLDivElement>("#bg1")!,
  document.querySelector<HTMLDivElement>("#bg2")!
);

console.log(state);

const hash = parseInt(location.hash.substring(1) || "-1");

let currentSlide = isNaN(hash) ? -1 : hash;

(async () => {
  document.querySelectorAll<HTMLDivElement>(".slide").forEach((slide) => {
    slide.classList.add("hidden");
    slide.style.setProperty("display", "none");
  });

  await wait(200);

  document.querySelector("#loading")?.classList.add("hidden");

  await wait(200);

  document
    .querySelector<HTMLDivElement>("#loading")
    ?.setAttribute("style", "display: none");

  changeSlides(currentSlide, true);
})();

async function changeSlides(index: number, forward: boolean) {
  const slide = slides[index];
  if (!slide) return;

  if (slide.slide.getAttribute("data-background-image")) {
    slide.slide.style.setProperty(
      "background-image",
      `url(${slide.slide.getAttribute("data-background-image")}`
    );
  }

  currentSlide = index;
  location.hash = currentSlide.toString();
  if (forward) {
    const prevSlide = slides[index - 1];
    if (prevSlide) {
      await prevSlide.moveFrom(prevSlide.slide, state, slide);
      prevSlide.slide.classList.add("hidden");
    }
    // await wait(300);
    slide.slide.classList.remove("hidden");
    slide.slide.style.setProperty("display", "");
    playEntranceAnimations(slide.slide);
    slide.moveTo(slide.slide, state, prevSlide);
    // if (prevSlide) {
    //     await wait(1000);
    //     prevSlide.slide.style.setProperty('display', 'none');
    // }
  } else {
    const prevSlide = slides[index + 1];
    if (prevSlide) {
      await prevSlide.moveFrom(prevSlide.slide, state, slide);
      prevSlide.slide.classList.add("hidden");
    }
    await wait(300);
    slide.slide.classList.remove("hidden");
    slide.slide.style.setProperty("display", "");
    playEntranceAnimations(slide.slide);
    slide.moveTo(slide.slide, state, prevSlide);
    // if (prevSlide) {
    //     await wait(1000);
    //     prevSlide.slide.style.setProperty('display', 'none');
    // }
  }
}

// document
//   .querySelector<HTMLButtonElement>("#next")
//   ?.addEventListener("click", () => {
//     changeSlides(currentSlide + 1, true);
//   });

// document
//   .querySelector<HTMLButtonElement>("#previous")
//   ?.addEventListener("click", () => {
//     changeSlides(currentSlide - 1, false);
//   });

addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowRight") {
    changeSlides(currentSlide + 1, true);
  }
  if (ev.key === "ArrowLeft") {
    changeSlides(currentSlide - 1, false);
  }
});

window.onhashchange = function () {
  const hash = parseInt(location.hash.substring(1) || "-1");

  if (!isNaN(hash) && hash != currentSlide) {
    changeSlides(hash, hash > currentSlide);
  }
};
