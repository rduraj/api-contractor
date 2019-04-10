# API Contractor

## Setup:
1) Create markdowns with contracts inside `./docs` folder - see also: **proper MD files structure**
2) Copy `./setup` files to your root dir in project
3) Install dependencies by `yarn` command
4) Build project by `yarn build` command
5) Run `index.html` in your browser or **deploy it with netlify**

## Proper MD files structure:
Your MD files should have specific structure like this:
```
./docs
  /Auth
    post.login.md
    post.register.md
  /User
    get.user.md
    get.user_{uuid}.md
    ...
```

## Proper MD file naming:
File names should have the same template: `{method}.{name-or-uri}.md`, where:
- `{method}` is REST API method like `post`, `get`, `patch`, `put`, `delete`, etc. OR `model` for general models
- `{name-or-uri}` could be just a name like `paged-result` or `uri` like: `user_{uuid}_roles`

Examples:
- `get.user_{uuid}_roles}` -> `GET user/{uuid}/roles`
- `get.paged-result` -> `GET paged-result`

## Deploying with netlify:
1) Change api-contractor paths in `index.html`, for each case:
    - `./node_modules/` -> `lib/api-contractor/`
2) Create new netlify build
3) Set netlify build command: `npm run build && cp -R ./node_modules/api-contractor ./lib/api-contractor`
4) Deploy!


