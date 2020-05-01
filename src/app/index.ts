import mapboxgl, { Map } from 'mapbox-gl';
import { State } from './State';
import { slides } from './slides';
import { wait } from './util';
import { Slide } from './Slide';
import { playEntranceAnimations } from './animation';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VwZXJtZWdhZGV4IiwiYSI6ImNqNnc4c242NDFjcG0zMm56MzlqMDk1czMifQ.gFotKrTtsriSfvGxKVzsoA';

const map = new Map({
    container: "map",
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-100, 40],
    zoom: 3
});

const state = new State(map, document.querySelector<HTMLDivElement>("#bg1")!, document.querySelector<HTMLDivElement>("#bg1")!);

let currentSlide = -1;

(async () => {
    
    
    document.querySelectorAll<HTMLDivElement>(".slide").forEach(slide => {
        slide.classList.add("hidden");
        slide.style.setProperty('display', 'none');
    });

    await wait(200);
    
    document.querySelector("#loading")?.classList.add('hidden');

    await wait(200);

    document.querySelector<HTMLDivElement>("#loading")?.setAttribute('style', 'display: none');
})();

async function changeSlides(index: number, forward: boolean) {
    const slide = slides[index];
    if (!slide) return;

    currentSlide = index;
    if (forward) {
        slide.slide.style.setProperty('display', '');
        const prevSlide = slides[index - 1];
        if (prevSlide) {
            await prevSlide.moveFrom(prevSlide.slide, state, slide);
            prevSlide.slide.classList.add('hidden');
        }
        slide.slide.classList.remove('hidden');
        playEntranceAnimations(slide.slide);
        slide.moveTo(slide.slide, state, prevSlide);
        // if (prevSlide) {
        //     await wait(1000);
        //     prevSlide.slide.style.setProperty('display', 'none');
        // }
    } else {
        slide.slide.style.setProperty('display', '');
        const prevSlide = slides[index + 1];
        if (prevSlide) {
            await prevSlide.moveFrom(prevSlide.slide, state, slide);
            prevSlide.slide.classList.add('hidden');
        }
        slide.slide.classList.remove('hidden');
        playEntranceAnimations(slide.slide);
        slide.moveTo(slide.slide, state, prevSlide);
        // if (prevSlide) {
        //     await wait(1000);
        //     prevSlide.slide.style.setProperty('display', 'none');
        // }
    }
}

document.querySelector<HTMLButtonElement>('#next')?.addEventListener('click', () => {
    changeSlides(currentSlide + 1, true);
});

document.querySelector<HTMLButtonElement>('#previous')?.addEventListener('click', () => {
    changeSlides(currentSlide - 1, false);
});
