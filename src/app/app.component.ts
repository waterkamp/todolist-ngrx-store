import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ComponentsHostDirective } from './directives/components-host.directive';
import { dynamicComponents } from './configuration/dynamic.components';
import { DynamicComponentKeys } from './helpers/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dynamicComponentKeys = DynamicComponentKeys;

  @ViewChild(ComponentsHostDirective, {static: true}) componentsHost?: ComponentsHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.loadComponent(DynamicComponentKeys.Todos);
  }

  onMenuItemClick(componentKey: DynamicComponentKeys) {
    this.loadComponent(componentKey);
  }

  loadComponent(componentKey: DynamicComponentKeys) {
    const componentToLoad = dynamicComponents.find(dc => dc.key === componentKey)?.component;

    const componentFactory = this.componentFactoryResolver
    .resolveComponentFactory(componentToLoad);

    const viewContainerRef = this.componentsHost?.viewContainerRef;
    if (viewContainerRef) {
      viewContainerRef.clear();
    }

    viewContainerRef?.createComponent(componentFactory);
  }
}
