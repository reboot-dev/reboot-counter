# Resemble Counter

For the impatient:
1. Prepare an environment by either:
    * [Using VSCode connected to a GitHub Codespace](#using-vscode-connected-to-a-github-codespace)
    * [Installing prerequisites directly](#installing-prerequisites-directly)
2. [Run the application](#run-the-application)

### Overview

A very simple (but still reactive and transactional!) counter.

The [Resemble '.proto' definition](https://docs.reboot.dev/develop/schema#code-generation)
can be found in the `api/` directory, grouped into
subdirectories by proto package, while backend specific code can be
found in `backend/` and front end specific code in `web/`.

_For more information on all of the Resemble examples, please [see the docs](https://docs.reboot.dev/get_started/examples)._

## Prepare an environment by...

<a id="using-vscode-connected-to-a-github-codespace"></a>
### Using VSCode connected to a GitHub Codespace

This method requires running [VSCode](https://code.visualstudio.com/) on your machine: if that isn't your bag, see [the other environment option](#install-prerequisites-directly) below.

This repository includes a [Dev Container config](./.devcontainer/devcontainer.json) (more about [Dev Containers](https://containers.dev/)) that declares all of the dependencies that you need to build and run the example. Dev Containers can be started locally with VSCode, but we recommend using GitHub's [Codespaces](https://github.com/features/codespaces) to quickly launch the Dev Container:

1. Right-click to create a Codespace in a new tab or window:
    * [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/reboot-dev/resemble-counter)
    * *Important*: In order to view the example's front end, you must connect your local VSCode to the codespace: you cannot use VSCode in a browser window.
2. Go to [https://github.com/codespaces](https://github.com/codespaces) and click the three dots next to the codespace you just created and then click `Open in Visual Studio Code`.
    * You can [set your default editor to VSCode for codespaces](https://docs.github.com/en/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces) to avoid this step in the future. See [these instructions](https://docs.github.com/en/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=vscode) for more information.

Now you're ready to [run the application](#run-the-application)!

<a id="installing-prerequisites-directly"></a>
### Installing prerequisites directly

Running directly on a host requires:

- A platform of either:
   - `x86_64 Linux` with `glibc>=2.35` (Ubuntu Jammy and other equivalent-generation Linux distributions)
   - `arm64 or x86_64 MacOS` with `MacOS>=13.0` and `Xcode>=14.3`
- Python==3.10.
   - If `python --version` does not report Python 3.10, you can use [Rye](https://rye-up.com/) to automatically fetch and manage Python 3.10 [in this directory](./.python-version).
- Node.js
    - Including `npm`.
- Docker
    - Note: the example does not run "inside of" Docker, but Docker is used to host a native support service for local development.

If you are unable to meet any of these requirements, we suggest using the [VSCode and Dev Container environment](#using-vscode-connected-to-a-github-codespace) discussed above.

Now you're ready to [run the application](#run-the-application)!

<a id="run-the-application"></a>
## Run the application

### Backend

Our backend is implemented in TypeScript and we must install its dependencies before
running it.

```sh
npm install
```

#### Run the backend

Then, to run the application, you can use the Resemble CLI `rsm`:
```shell
npx rsm dev run
```

Running `rsm dev run` will watch for file modifications and restart the
application if necessary. See the `.rsmrc` file for flags and
arguments that get expanded when running `rsm dev run`.

### Front end

To run the front end, open a separate terminal/shell and do:
```shell
npm run dev:web
```

If using VSCode, the page will load automatically.
If not using VSCode, visit [http://127.0.0.1:3000](http://127.0.0.1:3000)`.