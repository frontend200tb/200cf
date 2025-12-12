class CfEdu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-edu';
  }
}

customElements.define('cf-edu', CfEdu);
