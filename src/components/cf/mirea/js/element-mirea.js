class CfMirea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-mirea';
  }
}

customElements.define('cf-mirea', CfMirea);
