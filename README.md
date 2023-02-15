# View Upcoming Games

Upcoming games web application is focused on providing accessible information on
upcoming games in a user-friendly interface with tools to provide multiple
filtering options.

## Tech used

-   Create-react-app
-   ReactJS
-   HTML, CSS, JS
-   TailwindCSS
-   DaisyUI
-   NodeJS
-   NPM

## How to install and run

1. npm install
2. npm run start

## Todo

-   Set up proxy server - Due to cors error setting up a proxy to solve the
    problem. Solved via AWS cloudformation proxy

-   Fix UI - Dark theme ui currently chosen, still subject to change

-   Implement buttons - Implemented buttons with filtering actions via client
    side

-   Remove multiple month user selections - Multiple selections not intended for
    monthly filters, fixed with radio buttons instead

*   Genres, platforms, low due to low amount of fetched items - Currently
    fetching 500 items however trade off is slow initial page load

*   game sorting API - Solved using months and years and timestamps instead of
    server side sorting

*   Make button to see image .card.image-full:before backbground color to
    restore brightness, card-body opacity 0 - Currently pseudo class controls
    overlay which makes covers dark, havent figured out how to bypass this

*   Filtering - Currently on client side, switching to server side to improve
    load times

*   Sort games correctly - Sorting implemented correctly however small issues
    due to API not having full dates for all games

*   Pagination - Done with react-paginate

*   Screen sizes UI - Test on bigger screens

## Future work

-   Reduce useState

*   Fetching 500 items currently - Load times are slow, improve with caching or
    pagination via api instead of client side, AWS caching costs money

*   Optimize web app

*   Make functions more general in context

*   Make buttons more general purpose - repeated code

-   Fetch - replace with react query and axios

*   Clear all filters button - Not true clear all, ideally remove all checkbox
    to unchecked, reset to oroginal list without page refresh

*   Pagination is limited size, due to not figuring out how to style with
    daisyui, styling li makes pagination unresponsive, howver styling a tag
    works, but does not make it cohesive

*   Create custom styling for pagination along with media queries to make
    responsive

## Liscence

MIT License

Copyright (c) 2023 Peter Dinh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
