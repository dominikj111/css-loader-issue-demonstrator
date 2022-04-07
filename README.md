# Minimal css-loader issue demonstrator
This repository shows the issue when loading assets during compilation.

To init the project, run:

```
git clone https://github.com/domino2/css-loader-issue-demonstrator.git &&\
cd css-loader-issue-demonstrator &&\
echo "projectpath=$(pwd)" > .env
```

To see the problem on your machine, run `npm i && npm run build-webpack && chrome index.html`.

You will see this in the browser:

![square is rendered instead of caret-down symbol](https://raw.githubusercontent.com/domino2/css-loader-issue-demonstrator/master/imgissue.png)


It works as expected after downgrade the css-loader version to version 5.2.7:

`npm uninstall css-loader && npm i -D css-loader@5.2.7 && npm run build-webpack && chrome index.html`

![caret-down symbol](https://raw.githubusercontent.com/domino2/css-loader-issue-demonstrator/master/imgcorrect.png)

Run this to get the issue back:

`npm uninstall css-loader && npm i -D css-loader && npm run build-webpack && chrome index.html`
