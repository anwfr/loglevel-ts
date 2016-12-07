# loglevel-ts
- Example of loglevel usage with typescript and webpack
- Added feature: prefix messages with logger name

## Installation

```
npm install loglevel @types/loglevel
```

## Usage

```javascript
import * as log from 'loglevel'
import {enableLoggerNamePrefix} from '../lib/loglevel-ts'

enableLoggerNamePrefix()

let logger = log.getLogger('foo')
logger.info('hello')

// result: [foo] hello
```

## To do
- package as NPM module

## Credits
- [loglevel](https://github.com/pimterry/loglevel)