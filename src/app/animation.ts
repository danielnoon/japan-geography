import { wait } from "./util";

export async function playEntranceAnimations(parent: HTMLElement) {
    const els = Array.from(parent.querySelectorAll<HTMLDivElement>(".animate-in"));
    for (let el of els) {
        el.style.setProperty("--animation-duration", el.getAttribute('data-animation-duration') || '500ms');
        await wait(parseInt(el.getAttribute('data-animation-delay') || '0'));
        el.classList.add('animate');
    }
}