# Scramjet v2.0.67-alpha.1 for React
**Required Packages:**
- `@mercuryworkshop/scramjet@2.0.67-alpha.1`
- `@mercuryworkshop/epoxy-transport` OR `@mercuryworkshop/libcurl-transport`
- `@mercuryworkshop/scramjet-controller`

**Optional Packages:**
- `@mercuryworkshop/scramjet-utils` - Used for extra features like plugins

## To Set Up
- Change the Wisp URL in `App.tsx`
- Add component into your app
- Put SW in the public directory
- Make sure to copy the controller, Epoxy/Libcurl, and Scramjet files into public, or use vite-static-copy-plugin to do it at runtime.
- Register SW in `index.html`