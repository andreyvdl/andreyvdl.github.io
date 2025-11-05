class NavigatorElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="/index.html">Home</a> |
                <a href="/projects/index.html">Projects</a> |
                <a href="/certificates/index.html">Certificates</a>
            </nav>
        `;
    }
}

class ProjectNode extends HTMLElement {
    static observedAttributes = ["language", "title", "description", "link"];

    constructor() {
        super();
        this._mainLanguage = null;
        this._title = null;
        this._desc = null;
        this._link = null;
    }

    get language() {
        return this._mainLanguage;
    }

    set language(v) {
        this.setAttribute("language", v);
    }

    get title() {
        return this._title;
    }

    set title(v) {
        this.setAttribute("title", v);
    }

    get link() {
        return this._link;
    }

    set link(v) {
        this.setAttribute("link", v);
    }

    get description() {
        return this._desc;
    }

    set description(v) {
        this.setAttribute("description", v);
    }

    attributeChangedCallback(name, oldV, newV) {
        if (oldV === newV)
            return;

        switch (name) {
            case "language":
                this._mainLanguage = newV;
                break;
            case "title":
                this._title = newV;
                break;
            case "description":
                this._desc = newV;
                break;
            case "link":
                this._link = newV;
                break;
        }

        this.render();
    }

    connectedCallback() {
        this._mainLanguage = this.getAttribute("language") ?? "";
        this._title = this.getAttribute("title") ?? "";
        this._desc = this.getAttribute("description") ?? "";
        this._link = this.getAttribute("link") ?? "";

        this.render();
    }

    render() {
        this.innerHTML = `
            <a href="${this._link}" target="_blank">
                <h3 style="padding-left: 8px;">${this._title}</h3>
                <p style="padding-left: 8px;">${this._desc}</p>
            </a>
        `;

        this.style.display = "block";
        this.style.width = "1/3";
        this.style.backgroundColor = "#444444";
        this.style.margin = "2px";
        this.style.border = "1px solid #000";
        this.style.maxWidth = "300px";
    }
}

class CertificateNode extends HTMLElement {
    static observedAttributes = ["title", "company", "hash", "link"];

    constructor() {
        super();
        this._company = null;
        this._title = null;
        this._hash = null;
        this._link = null;
    }

    get title() {
        return this._title;
    }

    set title(v) {
        this.setAttribute("title", v);
    }

    get company() {
        return this._company;
    }

    set company(v) {
        this.setAttribute("company", v);
    }

    get hash() {
        return this._hash;
    }

    set hash(v) {
        this.setAttribute("hash", v);
    }

    get link() {
        return this._link;
    }

    set link(v) {
        this.setAttribute("link", v);
    }

    attributeChangedCallback(name, oldV, newV) {
        if (oldV === newV)
            return;

        switch (name) {
            case "company":
                this._company = newV;
                break;
            case "hash":
                this._hash = newV;
                break;
            case "title":
                this._title = newV;
                break;
            case "link":
                this._link = newV;
                break;
        }

        this.render();
    }

    connectedCallback() {
        this._title = this.getAttribute("title") ?? "";
        this._company = this.getAttribute("company") ?? "";
        this._hash = this.getAttribute("hash") ?? "";
        this._link = this.getAttribute("link") ?? "";

        this.render();
    }

    render() {
        if (this._link !== "")
            this._link = 'href="' + this._link + '"';

        this.innerHTML = `
            <a ${this._link} target = "_blank" >
                <h3 style="padding-left: 8px;">${this._title}</h3>
            </a>
            <p style="padding-left: 8px;"><bold>${this._company}</bold><br>${this._hash}</p>
        `;

        this.style.display = "block";
        this.style.width = "1/3";
        this.style.backgroundColor = "#444444";
        this.style.margin = "2px";
        this.style.border = "1px solid #000";
        this.style.maxWidth = "300px";
    }
}

customElements.define("nav-bar-port", NavigatorElement);
customElements.define("project-node", ProjectNode);
customElements.define("cert-node", CertificateNode);