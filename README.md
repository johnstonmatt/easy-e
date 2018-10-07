[![Coverage Status](https://coveralls.io/repos/github/johnstonmatt/easy-e/badge.svg?branch=master)](https://coveralls.io/github/johnstonmatt/easy-e?branch=master)
[![Build Status](https://travis-ci.org/johnstonmatt/easy-e.svg?branch=master)](https://travis-ci.org/johnstonmatt/easy-e)
[![npm](https://img.shields.io/npm/v/easy-e.svg)](https://npmjs.com/package/easy-e)



# easy-e

built in hopes that I will better handle exceptions, it's [easy](https://johnstonmatt.github.io/easy-e)
  

[typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter) makes it so easy to publish to [npm](https://npmjs.com/easy-e) that I'd rather publish out of convenience, its amazing!

### now in technicolor!

## usage

```javascript

import  Erric  from  'easy-e';
import { toastify } from 'react-toastify'

  

function  showPopUpWithMessage(msg) {
    // you do work, react-toastify is pretty good if you are using react, example:
    toastify.error(msg);
}

  

var  blogpost = { name: '#buildingTheWrongThing', medium: 'medium' }

  

if(!isSluggable(blogpost.name)){

validationError = new  Erric();

validationError.setCode('validation/blog/name/unsluggable');

validationError.setMessageForHumans('sorry, only letters and spaces!');

validationError.setMetadata({ input: blogpost.name })

validationError.alert(showPopupWithMessage);
```
![[a  pretty  red  box pops up says  'sorry, only letters and spaces!](http://serveon.site/ez.gif)](https://serveon.site/ez.gif)
```javascript
validationError.throw();
```