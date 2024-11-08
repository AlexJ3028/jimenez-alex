export class Ability {
    getHTMLRepresentation() {
        return `
            <div class="ability-info">
                <h3 class="ability-title">${this.capitalizeName()}</h3>
                <div class="ability-content">
                    <p class="p-ability"><strong>Who can learn it?</strong></p>
                    <ul class="ability-learners">
                        ${this.learners.map(learner => {
                            let hiddenIndicator = '';
                            if (learner.isHidden) {
                                hiddenIndicator = '<span class="hidden-ability-indicator">👁️</span>';
                            }
                            return `
                                <li>
                                    ${learner.name}
                                    ${hiddenIndicator}
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    capitalizeName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }

    constructor(name, learners) {
        this.name = name;
        this.learners = learners;
    }
}