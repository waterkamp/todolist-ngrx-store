import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentsHost]',
})
export class ComponentsHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
