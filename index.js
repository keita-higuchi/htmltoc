'use strict'

class htmlToc {
    constructor() {
        this.targets = "h2,h3,h4";
        this.idPrefix = "toc-";
        this.tocs = [];
    }

    setTargets(val) {
        this.targets = val;
    }

    setTemplate() {
    }

    compile() {
        let tmp = document.querySelectorAll(this.targets);

        for (let i = 0; i < tmp.length; i++) {
            let content = tmp[i];

            if (content.id === '') {
                content.id = this.idPrefix + i;
            }

            this.tocs.push({
                level: content.tagName.slice(-1) - 0,
                text: content.innerText,
                id: content.id
            });
        }

        return this;

    }

    getToc() {
        var base = document.createElement('ul');
        var currentLevel = '';

        for (let i = 0; i < this.tocs.length; i++) {
            let obj = this.tocs[i];

            let liTag = document.createElement('li');
            let aTag = document.createElement('a');
            aTag.href = "#" + obj.id;
            aTag.innerText = obj.text;
            liTag.appendChild(aTag);
            liTag.classList.add('level-' + obj.level);

            // TODO 階層化？
            base.appendChild(liTag);
            currentLevel = obj.level;
        }
        return base;
    }

    deploy(query) {
        this.compile();
        let obj = document.querySelectorAll(query)
        obj = obj[0];
        obj.appendChild(this.getToc());

    }

}

module.exports = htmlToc;

