import { DynamicComponentKeys } from "../helpers/enums";
import { TimesComponent } from "../times/times.component";
import { TodosComponent } from "../todos/todos.component";

export const dynamicComponents: {key: DynamicComponentKeys, component: any}[] = [
  {key: DynamicComponentKeys.Todos, component: TodosComponent},
  {key: DynamicComponentKeys.Times, component: TimesComponent},
]
