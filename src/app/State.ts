import { Map } from 'mapbox-gl';

export class State {
  private isMap: boolean;
  private bg1 = true;
  constructor(
    private map: Map,
    private background1: HTMLDivElement,
    private background2: HTMLDivElement
  ) {
    this.isMap = true;
  }

  setMapCenter(center: [number, number], zoom = 5, duration = 3000) {
    this.map.flyTo({ center, duration, zoom });
    this.showMap();
  }

  showMap() {
    this.background1.classList.remove('show');
    this.background2.classList.remove('show');
  }

  showPlainBackground() {
    this.background1.classList.add('show');
  }

  hidePlainBackground() {
    this.background1.classList.remove('show');
  }

  showBackground(src: string) {
    const bg = this.background1;
    bg.style.setProperty('background-image', `url(${src})`);
    bg.classList.add('show');
    this.background2.classList.remove('show');
  }

  hideBackground() {
    this.background2.classList.remove('show');
  }
}
