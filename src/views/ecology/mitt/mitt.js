/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-18 10:42:30
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 10:52:55
 * @FilePath: \new-plus\src\views\ecology\mitt\mitt.js
 * @Description:
 *
 */
'use strict'
// exports.__esModule = true
console.log('%c Line:14 🍌本地 mitt.js', 'color:#1890ff;')
/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
function mitt(all) {
  all = all || new Map()
  return {
    /**
     * A Map of event names to registered handler functions.
     */
    all: all,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function (type, handler) {
      var handlers = all.get(type)
      if (handlers) {
        handlers.push(handler)
      } else {
        all.set(type, [handler])
      }
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off: function (type, handler) {
      var handlers = all.get(type)
      console.log('%c  all', 'color:#fca650', all)
      console.log('%c  type', 'color:#fca650', type)
      if (handlers) {
        console.log('%c  handlers', 'color:#fca650', handlers)
        if (handler) {
          console.log('%c  handler', 'color:#fca650', handler, handlers.indexOf(handler))
          handlers.splice(handlers.indexOf(handler) >>> 0, 1)
          console.log('%c Line:55 🍌 type, handlers', 'color:#fca650', handlers)
        } else {
          all.set(type, [])
        }
      }
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function (type, evt) {
      var handlers = all.get(type)
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(evt)
        })
      }
      handlers = all.get('*')
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(type, evt)
        })
      }
    }
  }
}
export default mitt
