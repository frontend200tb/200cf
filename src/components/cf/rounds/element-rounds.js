class CfRounds extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="cf-rounds" id="cf-rounds">
      <h1>Rounds</h1>
      <nav class="nav" id="main-nav"></nav>
      <div id="rounds"></div>
    </div>
    `;
    this.className = 'cf-rounds';
  }
}

customElements.define('cf-rounds', CfRounds);
