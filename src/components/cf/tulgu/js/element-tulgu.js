class CfTulgu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-tulgu';
  }
}

customElements.define('cf-tulgu', CfTulgu);
