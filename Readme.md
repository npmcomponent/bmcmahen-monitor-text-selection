*This repository is a mirror of the [component](http://component.io) module [bmcmahen/monitor-text-selection](http://github.com/bmcmahen/monitor-text-selection). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bmcmahen-monitor-text-selection`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# monitor-select

  emit events for selection and deselection of text for a given element.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/monitor-text-selection

## Example

```javascript
var el = document.querySelector('#text');
var monitor = require('monitor-text-selection')(el);
monitor.on('selected', function(e, el){
  console.log('selected');
});

monitor.on('deselected', function(e, el){
  console.log('deselected');
});

// unbind 
monitor.unbind();
```



## License

  MIT
