## Welcome to my test repository

I applied to the Snr. Front-end position @CookAngels and was assigned this test. I made this repo in order to give you access to my source code.
The project is deployed and available online: [https://cookangels-test.now.sh](https://cookangels-test.now.sh)

### Styling

It's bare minimum UI and styling. For this assignement I used the `JSX styling` method for simplicity. In bigger projects I rather prefer to use a styling file per component or page, using SASS or Stylus. When needed I also use CSS Modules, but I try to keep my CSS naming clean so I don't create naming collisions.

### Issue

- The UI do not update when changing the rating on the pages: `/list` and `/movie/${id}`. I did not take time to fix this issue.

### Next.JS

I was assigned to make a React / Redux mini-app, so I chose to work with the `create-next-app` boilerplate. I am use to this environement and I find it easy and fast to use for quick projects like this assignement.

Below you will find the original `README.md` of the boilerplate.


## Deploy your own

Deploy the example using [ZEIT Now](https://zeit.co/now):

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/zeit/next.js/tree/canary/examples/with-redux-thunk)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npm init next-app --example with-redux-thunk with-redux-thunk-app
# or
yarn create next-app --example with-redux-thunk with-redux-thunk-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-redux-thunk
cd with-redux-thunk
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [ZEIT Now](https://zeit.co/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
