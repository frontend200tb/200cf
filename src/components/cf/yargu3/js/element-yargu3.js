class CfYargu3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-yargu3';
  }
}

customElements.define('cf-yargu3', CfYargu3);
