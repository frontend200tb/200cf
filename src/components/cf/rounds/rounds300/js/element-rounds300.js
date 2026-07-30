class Rounds300 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'rounds-300';
  }
}

customElements.define('rounds-300', Rounds300);
