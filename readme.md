# Windows Paths Testing Reproduction Case

This repository is meant to coincide with https://github.com/ionic-team/stencil/pull/4997.

## Setup
A dev build of Stencil for the PR listed above has been created/used by this project.
That dev build is: `@stencil/core@4.7.1-dev.1699535671.a4c3950`.

The following sections assume that this repo has been cloned locally and dependencies installed (`npm ci`). 
Note that manual testing should occur on a Windows based machine.

## Copy Tasks

GitHub Issue: https://github.com/ionic-team/stencil/issues/4980

1. Start the dev server of the reproduction case with `npm start`
2. Observe the contents of `src/dev/worksonmymachine.html` have been copied to `www/dev/worksonmymachine.html` (open the both to confirm that they match).
3. Edit `src/dev/worksonmymachine.html` - add text, write a blog, add non-sense - whatever feels right. We only need one character of difference here.
4. Open `www/dev/worksonmymachine.html`, observe your changes made to `src/dev/worksonmymachine.html` have been propagated to the copied file under `www/dev/`

## Global Styles

GitHub Issue: https://github.com/ionic-team/stencil/issues/4961

1. Start the dev server of the reproduction case with `npm start`
2. Observe that the background of the ‘Hello World’ message is blue. This is controlled by a CSS variable that is defined in a global style for the project.
3. In your favorite (or least favorite) text editor, open `src/global.css`. This file contains the CSS variable that is currently set to blue.
4. Modify the value to be a valid CSS color (`red`, `green`, etc.)
5. Observe the background of the ‘Hello World’ message now properly changes to reflect the changes found in that global CSS file