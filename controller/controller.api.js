var $scramjetController;
(() => {
  const config = {
    prefix: "/~/sj/",
    scramjetPath: "/scramjet/scramjet.js",
    injectPath: "/controller/controller.inject.js",
    wasmPath: "/scramjet/scramjet.wasm",
    virtualWasmPath: "scramjet.wasm.js",
    codec: {
      encode: (url) => (url ? encodeURIComponent(url) : url),
      decode: (url) => (url ? decodeURIComponent(url) : url)
    }
  };

  class Controller {
    constructor(init = {}) {
      if (typeof $scramjetLoadController !== "function") {
        throw new Error("@mercuryworkshop/scramjet loader is not available. Load /scramjet/scramjet.js first.");
      }

      const { ScramjetController } = $scramjetLoadController();
      const files = {
        wasm: config.wasmPath,
        all: config.scramjetPath,
        sync: "/scramjet/scramjet.sync.js"
      };

      this._controller = new ScramjetController({
        prefix: init?.config?.prefix || config.prefix,
        files,
        codec: config.codec,
        ...(init?.scramjetConfig || {})
      });
      this._readyPromise = null;
    }

    async wait() {
      this._readyPromise ||= this._controller.init();
      await this._readyPromise;
    }

    createFrame(frameElement) {
      return this._controller.createFrame(frameElement);
    }

    setTransport() {
      // Transport is configured through BareMux in Scramjet 1.1.0.
    }
  }

  class ManagedPlugin {}

  $scramjetController = {
    Controller,
    Frame: undefined,
    ManagedPlugin,
    VERSION: globalThis.$scramjetVersion?.version || "1.1.0",
    assertRuntimeScramjetVersion: () => {},
    config
  };
})();
