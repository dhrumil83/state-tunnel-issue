# Repro steps

```bash
npm install
npm start
```

no warnings in console.

Change stencil version from 2.3.0 to 2.5.2 in package.json. Repeat steps above, and now console has warnings like:

```bash
@Prop() "test" on <app-home-tunnel> is immutable but was modified from within the component.
```
Note: "test" prop is passed via state tunnel.
