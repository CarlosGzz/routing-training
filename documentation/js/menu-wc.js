'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">routing-example documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b010c77f6e4aacd7f64f16c3d00aa3b3"' : 'data-target="#xs-components-links-module-AppModule-b010c77f6e4aacd7f64f16c3d00aa3b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b010c77f6e4aacd7f64f16c3d00aa3b3"' :
                                            'id="xs-components-links-module-AppModule-b010c77f6e4aacd7f64f16c3d00aa3b3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderNavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderNavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Feature1Module.html" data-type="entity-link">Feature1Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Feature1Module-2cf013b83b6979be2aa744458cfc84a2"' : 'data-target="#xs-components-links-module-Feature1Module-2cf013b83b6979be2aa744458cfc84a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Feature1Module-2cf013b83b6979be2aa744458cfc84a2"' :
                                            'id="xs-components-links-module-Feature1Module-2cf013b83b6979be2aa744458cfc84a2"' }>
                                            <li class="link">
                                                <a href="components/F1test1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">F1test1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/F1test2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">F1test2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/F1test3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">F1test3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeatureHomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Feature1RoutingModule.html" data-type="entity-link">Feature1RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Feature2Module.html" data-type="entity-link">Feature2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Feature2Module-4cfd7ff1c4aad2eb002c5729f4ca3aa7"' : 'data-target="#xs-components-links-module-Feature2Module-4cfd7ff1c4aad2eb002c5729f4ca3aa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Feature2Module-4cfd7ff1c4aad2eb002c5729f4ca3aa7"' :
                                            'id="xs-components-links-module-Feature2Module-4cfd7ff1c4aad2eb002c5729f4ca3aa7"' }>
                                            <li class="link">
                                                <a href="components/Feature2HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Feature2HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Feature2TestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Feature2TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Feature2RoutingModule.html" data-type="entity-link">Feature2RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Feature3Module.html" data-type="entity-link">Feature3Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Feature3Module-f940db80c0c733e866c534adeb1035d6"' : 'data-target="#xs-components-links-module-Feature3Module-f940db80c0c733e866c534adeb1035d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Feature3Module-f940db80c0c733e866c534adeb1035d6"' :
                                            'id="xs-components-links-module-Feature3Module-f940db80c0c733e866c534adeb1035d6"' }>
                                            <li class="link">
                                                <a href="components/Feature3HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Feature3HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuardTestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GuardTestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Feature3RoutingModule.html" data-type="entity-link">Feature3RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MaterialModule-25483487fd86e5b7f7002fb81871be09"' : 'data-target="#xs-components-links-module-MaterialModule-25483487fd86e5b7f7002fb81871be09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MaterialModule-25483487fd86e5b7f7002fb81871be09"' :
                                            'id="xs-components-links-module-MaterialModule-25483487fd86e5b7f7002fb81871be09"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/Feature3Service.html" data-type="entity-link">Feature3Service</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/Test3Guard.html" data-type="entity-link">Test3Guard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});