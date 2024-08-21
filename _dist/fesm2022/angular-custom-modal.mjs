import * as i0 from '@angular/core';
import { Component, ContentChild, Input, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

/* tslint:disable:component-selector */
class ModalComponent {
    elementRef;
    changeDetectorRef;
    header;
    body;
    footer;
    closeOnOutsideClick = true;
    visible = false;
    visibleAnimate = false;
    constructor(elementRef, changeDetectorRef) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnDestroy() {
        // Prevent modal from not executing its closing actions if the user navigated away (for example,
        // through a link).
        this.close();
    }
    open() {
        document.body.classList.add('modal-open');
        this.visible = true;
        setTimeout(() => {
            this.visibleAnimate = true;
        });
    }
    close() {
        document.body.classList.remove('modal-open');
        this.visibleAnimate = false;
        setTimeout(() => {
            this.visible = false;
            this.changeDetectorRef.markForCheck();
        }, 200);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal') && this.isTopMost() && this.closeOnOutsideClick) {
            this.close();
        }
    }
    onKeyDownHandler(event) {
        // If ESC key and TOP MOST modal, close it.
        if (event.key === 'Escape' && this.isTopMost()) {
            this.close();
        }
    }
    /**
     * Returns true if this modal is the top most modal.
     */
    isTopMost() {
        return !this.elementRef.nativeElement.querySelector(':scope modal > .modal');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: ModalComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0", type: ModalComponent, selector: "modal", inputs: { closeOnOutsideClick: "closeOnOutsideClick" }, host: { listeners: { "click": "onContainerClicked($event)", "document:keydown": "onKeyDownHandler($event)" } }, queries: [{ propertyName: "header", first: true, predicate: ["modalHeader"], descendants: true }, { propertyName: "body", first: true, predicate: ["modalBody"], descendants: true }, { propertyName: "footer", first: true, predicate: ["modalFooter"], descendants: true }], ngImport: i0, template: "<div \n  class=\"modal fade\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n  [class.in]=\"visibleAnimate\"\n  *ngIf=\"visible\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n        <button class=\"close\" data-dismiss=\"modal\" type=\"button\" aria-label=\"Close\" (click)=\"close()\">\u00D7</button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["modal .modal{display:flex;flex:1;align-items:center;justify-content:center}.modal{position:fixed;top:0;left:0;width:100%;min-height:100%;background-color:#00000026;z-index:42}.modal.in{opacity:1}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'modal', template: "<div \n  class=\"modal fade\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n  [class.in]=\"visibleAnimate\"\n  *ngIf=\"visible\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n        <button class=\"close\" data-dismiss=\"modal\" type=\"button\" aria-label=\"Close\" (click)=\"close()\">\u00D7</button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["modal .modal{display:flex;flex:1;align-items:center;justify-content:center}.modal{position:fixed;top:0;left:0;width:100%;min-height:100%;background-color:#00000026;z-index:42}.modal.in{opacity:1}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], propDecorators: { header: [{
                type: ContentChild,
                args: ['modalHeader']
            }], body: [{
                type: ContentChild,
                args: ['modalBody']
            }], footer: [{
                type: ContentChild,
                args: ['modalFooter']
            }], closeOnOutsideClick: [{
                type: Input
            }], onContainerClicked: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyDownHandler: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }] } });

class ModalModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.0", ngImport: i0, type: ModalModule, declarations: [ModalComponent], imports: [CommonModule], exports: [ModalComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: ModalModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0", ngImport: i0, type: ModalModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [ModalComponent],
                    declarations: [ModalComponent],
                    providers: [],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ModalComponent, ModalModule };
//# sourceMappingURL=angular-custom-modal.mjs.map
