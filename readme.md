## Folder structure

├── app
├── build // gka output
├── dist // further optimized sprites
├── imagemin.js
├── images // your raw images(png)
├── node_modules
├── package.json
├── readme.md
├── webpack.config.js
└── yarn.lock


## only build sprites(Not recommend)

```bash
npm run build:wp
```

## Step1. build with gka(Recommend)

sprites  + percent + minify(Not work well when fileSize is larger than 50MB)

output is under `./build`

```bash
npm run build:gka
// or manually run bellow
npx gka ./images -t percent -a binary-tree -m --minirate 30-50 -d ./build
```

## Step2. only minify(After gka)(Optional)

It will minify png in `./build`, and generate file under `./dist`

```bash
npm run imagemin
```

## Reference

[GKA](https://gka.js.org/)

[how to gka](http://www.alloyteam.com/2017/07/12948/)