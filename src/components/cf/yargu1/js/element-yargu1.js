class CfYargu1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-yargu1';
  }
}

customElements.define('cf-yargu1', CfYargu1);
