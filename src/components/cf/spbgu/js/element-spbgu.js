class CfSpbgu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-spbgu';
  }
}

customElements.define('cf-spbgu', CfSpbgu);
