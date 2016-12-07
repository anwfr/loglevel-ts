# loglevel-ts
- Typescript and webpack
- Prefix messages with logger name

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
logger.info('hello ', 1234)

// result: [foo] hello 1234
```

## To do
- package as NPM module

## Credits
- [loglevel](https://github.com/pimterry/loglevel)