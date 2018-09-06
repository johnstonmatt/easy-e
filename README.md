[![Build Status](https://travis-ci.org/johnstonmatt/easy-e.svg?branch=master)](https://travis-ci.org/johnstonmatt/easy-e)

# easy-e

built in hopes that I will better handle exceptions, it's [easy](https://johnstonmatt.github.io/easy-e)

  

[typescript-library-starter](https://) makes it so easy to publish to [npm](https://npmjs.com/easy-e) that I'd rather publish out of convenience, its amazing!

  

## usage

```javascript

import  Erric  from  'easy-e';

  

function  showPopUpWithMessage(msg) {

// you do work, toastify is pretty good if you are using react

}

  

var  blogpost = { name: 'i <3 disenchanted'}

  

if(!isSluggable(blogpost.name)){

validationError = new  Erric();

validationError.setCode(`validation/blog/name/unsluggable`);

validationError.setMessageForHumans('sorry, only letters and spaces g </3');

validationError.setMetadata({ input: blogpost.name })

validationError.alert(showPopupWithMessage);
```
![[a  pretty  red  box  says  'sorry, only letters and spaces g </3](http://serveon.site/demo-toast.png)](http://serveon.site/demo-toast.png)
```javascript
validationError.throw();
```