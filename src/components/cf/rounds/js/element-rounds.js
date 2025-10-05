class CfRounds extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-rounds';
  }
}

customElements.define('cf-rounds', CfRounds);
