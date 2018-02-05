# vue-parcel-example

Simple boilerplate for vue and [parcel](https://parceljs.org/) and vuex and vue router. I added i18n feature

I modified [JFusco's example](https://github.com/JFusco/vue-router-vuex-example).

``` bash
git clone https://github.com/fri13th/vue-parcel-example.git
cd vue-parcel-example
yarn
yarn start
``` 
open browser and see http://localhost:1234

# issues
* typescript doesn't work in vue file
* dynamic module loading and code split doesn't work
* error occured in bundling local font face, scss doesn't work with this patch and shows no error
https://github.com/parcel-bundler/parcel/issues/659
