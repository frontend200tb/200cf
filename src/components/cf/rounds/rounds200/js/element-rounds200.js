class Rounds200 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'rounds-200';
  }
}

customElements.define('rounds-200', Rounds200);
