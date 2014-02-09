# frntndr.com
This repository is the source of the frntndr.com site, hosted from the gh-pages branch.

See [frntndr.com](http://frntndr.com/) for documentation.

## Development environment

### How to: Setup development environment
1. Make sure the following is installed on your machine:
  - [Node.js](http://nodejs.org/), 0.10 or bigger (tested up until 0.10.25)
  - [Ruby](http://www.ruby-lang.org/en/) (shipped with OSX)

2. Download most recent stable: [github.com/branneman/frontend-library/archive/master.zip](https://github.com/branneman/frontend-library/archive/master.zip)

3. Unzip the contents of the `frontend-library-master` directory into your new project directory.

4. Run these commands to setup your environment:

    ```
    cd /path/to/project
    gem install sass --pre
    npm i -g grunt-cli
    npm i
    ```

Done! You can now start your development server.

### How to: Start the development server

    cd /path/to/project
    node app

You can optionally configure your WebStorm to allow for a more easy server start, so you can click a fancy play button
instead of having to work on the scary CLI.

Then point your browser to [`http://localhost:1337/`](http://localhost:1337/)

### How to: Build
Make sure your app is running, then execute:

    cd /path/to/project
    grunt