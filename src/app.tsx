// This serves is the main component of the UI application. You can create
// sub-components and import them here, as well as importing stylesheets
// and other assets here too.

import { TodoWidget } from "./features/TodoWidget/components/TodoWidget";

// would add error boundary for widget if more time was allocated

export function App() {
  return (
    <div className="w-full h-screen flex justify-center">
      <TodoWidget />
    </div>
  );
}
