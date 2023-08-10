import { p as promiseResolve, b as bootstrapLazy } from './index-e1d51ed0.js';
export { s as setNonce } from './index-e1d51ed0.js';

/*
 Stencil Client Patch Browser v4.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-app_6",[[1,"my-app"],[1,"my-button"],[1,"my-form",{"email":[32],"password":[32]}],[1,"my-input",{"inputText":[32]}],[1,"my-timer",{"timerInSeconds":[32]}],[1,"text-field",{"text":[1]}]]]], options);
});
