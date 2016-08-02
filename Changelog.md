### 1.0.1
+ In some instances the `authenticate` method would not return. This seems to
  be because Bluebird's `coroutine` doesn't support `yield *`; though, I'm not
  certain of that. In any event, this fix resolves the issue.

### 1.0.0
+ update to [standardjs.com](http://standardjs.com) code style
+ add fairly comprehensive tests
+ `authenticate()` default filter changed to `(&(objectcategory=user)(samaccountname=username))`
+ add support for connecting via Unix domain socket
+ switch to [Bluebird](http://bluebirdjs.com) promise library for more performance