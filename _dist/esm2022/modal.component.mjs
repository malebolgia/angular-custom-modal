/* tslint:disable:component-selector */
import { Component, ContentChild, Input, HostListener, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ModalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFFdkMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBS1osS0FBSyxFQUNMLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQzs7O0FBT3ZCLE1BQU0sT0FBTyxjQUFjO0lBVWY7SUFDQTtJQVZtQixNQUFNLENBQW1CO0lBQzNCLElBQUksQ0FBbUI7SUFDckIsTUFBTSxDQUFtQjtJQUM3QyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFFcEMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQixjQUFjLEdBQUcsS0FBSyxDQUFDO0lBRXZCLFlBQ1UsVUFBc0IsRUFDdEIsaUJBQW9DO1FBRHBDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMxQyxDQUFDO0lBRUwsV0FBVztRQUNULGdHQUFnRztRQUNoRyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUk7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUs7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBR0Qsa0JBQWtCLENBQUMsS0FBaUI7UUFDbEMsSUFBa0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1RyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUdELGdCQUFnQixDQUFDLEtBQW9CO1FBQ25DLDJDQUEyQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQy9FLENBQUM7dUdBM0RVLGNBQWM7MkZBQWQsY0FBYyxvZUNuQjNCLDhyQkFxQkE7OzJGREZhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsT0FBTzsrR0FLWSxNQUFNO3NCQUFsQyxZQUFZO3VCQUFDLGFBQWE7Z0JBQ0EsSUFBSTtzQkFBOUIsWUFBWTt1QkFBQyxXQUFXO2dCQUNJLE1BQU07c0JBQWxDLFlBQVk7dUJBQUMsYUFBYTtnQkFDbEIsbUJBQW1CO3NCQUEzQixLQUFLO2dCQW9DTixrQkFBa0I7c0JBRGpCLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQVFqQyxnQkFBZ0I7c0JBRGYsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZCgnbW9kYWxIZWFkZXInKSBoZWFkZXI6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ21vZGFsQm9keScpIGJvZHk6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ21vZGFsRm9vdGVyJykgZm9vdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjbG9zZU9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcblxuICB2aXNpYmxlID0gZmFsc2U7XG4gIHZpc2libGVBbmltYXRlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gUHJldmVudCBtb2RhbCBmcm9tIG5vdCBleGVjdXRpbmcgaXRzIGNsb3NpbmcgYWN0aW9ucyBpZiB0aGUgdXNlciBuYXZpZ2F0ZWQgYXdheSAoZm9yIGV4YW1wbGUsXG4gICAgLy8gdGhyb3VnaCBhIGxpbmspLlxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlQW5pbWF0ZSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgIHRoaXMudmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNvbnRhaW5lckNsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSAmJiB0aGlzLmlzVG9wTW9zdCgpICYmIHRoaXMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gSWYgRVNDIGtleSBhbmQgVE9QIE1PU1QgbW9kYWwsIGNsb3NlIGl0LlxuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNUb3BNb3N0KCkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgbW9kYWwgaXMgdGhlIHRvcCBtb3N0IG1vZGFsLlxuICAgKi9cbiAgaXNUb3BNb3N0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlIG1vZGFsID4gLm1vZGFsJyk7XG4gIH1cbn1cbiIsIjxkaXYgXG4gIGNsYXNzPVwibW9kYWwgZmFkZVwiXG4gIHJvbGU9XCJkaWFsb2dcIlxuICB0YWJpbmRleD1cIi0xXCJcbiAgW2NsYXNzLmluXT1cInZpc2libGVBbmltYXRlXCJcbiAgKm5nSWY9XCJ2aXNpYmxlXCI+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+w5c8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJvZHlcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==