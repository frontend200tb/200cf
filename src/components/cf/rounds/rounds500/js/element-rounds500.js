class Rounds500 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'rounds-500';
  }
}

customElements.define('rounds-500', Rounds500);
