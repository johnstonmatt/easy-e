# easy-e
built in hopes that I will better handle exceptions, it's [easy](https://johnstonmatt.github.io/easy-e)

[typescript-library-starter]() makes it easy enough to publish to [npm](https://npmjs.com) that I'd rather publish out of convenience, its amazing!

## usage
```javascript
if(!isSluggable(blogpost.name)){
    validationError = new Erric();
    validationError.setCode(`validation/blog/name/unsluggable`);
    validationError.setMessageForHumans('only letters, numbers, and spaces g');
    validationError.setMeta({ input: blogpost.name })
    validationError.alert(showMyErrorToast);
}
```