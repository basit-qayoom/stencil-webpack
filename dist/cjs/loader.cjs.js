'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-43298a15.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return undefined;
  return index.bootstrapLazy([["my-app_6.cjs",[[1,"my-app"],[1,"my-button"],[1,"my-form",{"email":[32],"password":[32]}],[1,"my-input",{"inputText":[32]}],[1,"my-timer",{"timerInSeconds":[32]}],[1,"text-field",{"text":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
