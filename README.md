# ember-dom-inventory

This relies on the experimental
[ember-addon-state-bucket](https://github.com/fauxton/ember-addon-state-bucket)
addon to persist metadata about the Handlebars templates contained within an
Ember-CLI application.

Specifically, this addon saves information about the unique HTML tags and
classes within an app, so that other addons can act on it. In my case, I'd like
to identify unused classes in my stylesheets and warn in development/remove in
production builds.


## Installation

* `git clone <repository-url>` this repository
* `cd ember-dom-inventory`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
