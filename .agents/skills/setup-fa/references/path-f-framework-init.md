# Framework-specific initialization

After packages are installed, add the initialization code for the detected framework. Fetch the framework-specific doc (from the `llms.txt` index) if not already fetched, and follow its setup instructions.

**React** — typical setup:
```jsx
// In the app entry point (e.g., App.jsx, main.jsx, _app.tsx)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
```

**Vue** — typical setup:
```js
// In the app entry point (e.g., main.js, main.ts)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)
```

**Angular / Ember / Others** — follow the fetched documentation precisely.

**Important:** The code examples above are starting points. Always cross-reference with the fetched docs for the latest recommended patterns. Adapt imports to match the user's license (free vs pro) and the packages actually installed.
