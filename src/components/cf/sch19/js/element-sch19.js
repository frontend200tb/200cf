class CfSch19 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'cf-sch19';
  }
}

customElements.define('cf-sch19', CfSch19);
