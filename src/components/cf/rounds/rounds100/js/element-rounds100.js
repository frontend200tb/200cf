class Rounds100 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'rounds-100';
  }
}

customElements.define('rounds-100', Rounds100);
