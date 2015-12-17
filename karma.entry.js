require('angular2/bundles/angular2-polyfills');
require('angular2/testing');


// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Recursively discover all spec files
var context = require.context('./src', true, /\.spec\.ts/);

// Load discovered spec files
context.keys().forEach(context);

// Use the `BrowserDomAdapter`
var domAdapter = require('angular2/src/platform/browser/browser_adapter').BrowserDomAdapter;
domAdapter.makeCurrent();
