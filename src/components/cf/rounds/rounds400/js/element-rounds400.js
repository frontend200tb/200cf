class Rounds400 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'rounds-400';
  }
}

customElements.define('rounds-400', Rounds400);
