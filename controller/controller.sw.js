var $scramjetController;
(() => {
  let serviceWorker = null;

  function getServiceWorker() {
    if (!serviceWorker) {
      if (typeof $scramjetLoadWorker !== "function") {
        throw new Error("$scramjetLoadWorker is not available. Load /scramjet/scramjet.js first.");
      }
      const { ScramjetServiceWorker } = $scramjetLoadWorker();
      serviceWorker = new ScramjetServiceWorker();
    }
    return serviceWorker;
  }

  async function ensureLoaded() {
    const sw = getServiceWorker();
    await sw.loadConfig();
    return sw;
  }

  $scramjetController = {
    shouldRoute(event) {
      try {
        return getServiceWorker().route(event);
      } catch {
        return false;
      }
    },
    async route(event) {
      const sw = await ensureLoaded();
      return sw.fetch(event);
    }
  };
})();
