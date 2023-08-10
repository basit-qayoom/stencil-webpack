'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-43298a15.js');

/*
 Stencil Client Patch Browser v4.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-pw.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-app_6.cjs",[[1,"my-app"],[1,"my-button"],[1,"my-form",{"email":[32],"password":[32]}],[1,"my-input",{"inputText":[32]}],[1,"my-timer",{"timerInSeconds":[32]}],[1,"text-field",{"text":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
