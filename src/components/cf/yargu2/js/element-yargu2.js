class CfYargu2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-yargu2';
  }
}

customElements.define('cf-yargu2', CfYargu2);
