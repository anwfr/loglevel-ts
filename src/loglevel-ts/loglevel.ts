import * as log from 'loglevel'

export function enableLoggerPrefix() {
    let originalLoggerFactory = log.methodFactory;
    let myLog = log // ignore assignment warning
    myLog.methodFactory = function (methodName, logLevel, loggerName) {
        var rawMethod = originalLoggerFactory(methodName, logLevel, loggerName);
        return function (message, ...params) {
            let prefixedMessage = '[' + loggerName + '] ' + message
            params.unshift(prefixedMessage)
            return rawMethod.apply(this, params);
        };
    };
}
