# cui-light-plugins
Plugins package for cui-light
Package has been moved from the main project to give users ability to use only these plugins which happen to be essential for their projects.
Project is not ready to work out of the box - it must be built with **cui-light-core** and **cui-light** main project in a separate or target project.
> NOTE
> For users who want to build whole project or use it as a whole package choosing plugins separately.
> Main cui-light project already provides production ready solution with all plugins and components added.

Until version 0.2.0 all changelogs were posted under main project, available here: https://github.com/bpd-d/cui-light. 

# Installation
To install it use command:

```
npm install cui-light-plugins --save-dev
```

# Usage
## Get all initialized plugins

```
import { GetPlugins, CuiPluginsInit } from "cui-light-plugins/dist/esm/module";

let init: CuiPluginsInit = {
    autoLight: true,
    autoPrint: true
}

let plugins = GetPlugins(init);
```
