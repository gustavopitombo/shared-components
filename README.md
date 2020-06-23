shared components

    [ wip ]

---


#### `installation`

    $ npm install

---

Create your component - ```MyComponent```

#### `structure`

    /src
        /components
            /MyComponent
                - MyComponent.scss
                - MyComponent.spec.tsx
                - index.tsx
                - Readme.md

Import your component - ```index.tsx```
    
    /src
        - index.ts

Import your component style - ```MyComponent.scss```

    /src
        - index.scss


#### `development`

    $ npm start 



#### `test`

    $ npm test



#### `build`

    $ npm run build

---

#### `dependencies`

- React
- Typescript
- SASS
- Styleguidist
- TSLint
- Jest
- React Testing Library

---

#### `how to use`

- import your style-guide global sass file

```js
@import '~shared-components/lib/main.scss';
```

- import ```MyComponent```

```js
import { MyComponent } from 'shared-components';
```

---

-- thank you --