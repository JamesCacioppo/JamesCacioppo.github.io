# Contributions
Contributions are welcome and encouraged!  While I try to stay on top of these docs, at the end of the day I have limited time and I have to get my notes shoved in here.  As a result, WIP's will be published and may not be refined for a long time.  I welcome help with this.  Additionally, if you'd like to add content, please feel free to do so.  Remember, don't let perfect be the enemy of good enough.

## PR process
To contribute to this project, fork this repository and submit PR's from a branch on your fork.  The best way to do this is:

1) Create a fork of the repository
1) Clone your fork:
   <pre>git clone git@github.com:<var>USER_NAME</var>JamesCacioppo.github.io.git</pre>
1) Add an _upstream_ remote
   <pre>git remote add upstream git@github.com:JamesCacioppo/JamesCacioppo.github.io.git</pre>
1) Create a branch for your work:
   <pre>git checkout -b <var>BRANCH_NAME</var></pre>
1) Push that branch to your fork:
   <pre>git push --set-upstream origin <var>BRANCH_NAME</var></pre>
1) Submit a PR when complete
1) When the PR has been merged, update your `main`:
   <pre>git checkout main && git pull upstream && git push origin</pre>

## Issues
If you'd like to report a problem or request documentation be added but don't can't contribute, please create an issue at https://github.com/JamesCacioppo/JamesCacioppo.github.io/issues.
# Development Environments
## Running the website locally

Building and running the site locally requires a recent `extended` version of [Hugo](https://gohugo.io).
You can find out more about how to install Hugo for your environment in our
[Getting started](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.

Once you've made your working copy of the site repo, from the repo root folder, run:

```
hugo server
```

## Running a container locally

You can run _Modern Engineer_ inside a [Docker](https://docs.docker.com/)
container, the container runs with a volume bound to the `docsy-example`
folder. This approach doesn't require you to install any dependencies other
than [Docker Desktop](https://www.docker.com/products/docker-desktop) on
Windows and Mac, and [Docker Compose](https://docs.docker.com/compose/install/)
on Linux.

1. Build the docker image 

   ```bash
   docker-compose build
   ```

1. Run the built image

   ```bash
   docker-compose up
   ```

   > NOTE: You can run both commands at once with `docker-compose up --build`.

1. Verify that the service is working. 

   Open your web browser and type `http://localhost:1313` in your navigation bar,
   This opens a local instance of the docsy-example homepage. You can now make
   changes to the docsy example and those changes will immediately show up in your
   browser after you save.

### Cleanup

To stop Docker Compose, on your terminal window, press **Ctrl + C**. 

To remove the produced images run:

```console
docker-compose rm
```
For more information see the [Docker Compose
documentation](https://docs.docker.com/compose/gettingstarted/).

## Troubleshooting

As you run the website locally, you may run into the following error:

```
➜ hugo server

INFO 2021/01/21 21:07:55 Using config file: 
Building sites … INFO 2021/01/21 21:07:55 syncing static files to /
Built in 288 ms
Error: Error building site: TOCSS: failed to transform "scss/main.scss" (text/x-scss): resource "scss/scss/main.scss_9fadf33d895a46083cdd64396b57ef68" not found in file cache
```

This error occurs if you have not installed the extended version of Hugo.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-hugo) of the user guide for instructions on how to install Hugo.

Or you may encounter the following error:

```
➜ hugo server

Error: failed to download modules: binary with name "go" not found
```

This error occurs if you have not installed the `go` programming language on your system.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-go-language) of the user guide for instructions on how to install `go`.


[alternate dashboard]: https://app.netlify.com/sites/goldydocs/deploys
[deploys]: https://app.netlify.com/sites/docsy-example/deploys
[Docsy user guide]: https://docsy.dev/docs
[Docsy]: https://github.com/google/docsy
[example.docsy.dev]: https://example.docsy.dev
[Hugo theme module]: https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme
[Netlify]: https://netlify.com
