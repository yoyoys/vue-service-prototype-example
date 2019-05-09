# Standard service about business logic implement

I have implement 2 type of service for specific business logic.

Here is the comparison:
1. By Vuex
   * Pros
     * Vuex provides built-in subscribe system, it will be useful for local event bind.
     * Commit is thread-safe.
     * 
   * Cons
     * Commit and dispatch is not strong-type
       * But there're many strong-type implement.
     * If service running at non-vuex platform, you need to implement something like `new Vuex.Story(...)` for interact with state, or lose performance by Vuex state proxy.
     * Does not have a constructor for inject other service.
       * Needs di container.
2. By standard classic
   * Pros
     * It's standard ES6 class, so it can running on any platform without side-effect.
     * You can easily inject services by constructor.
     * Strong type
   * Cons
     * No built-in event hook.
     * Not thread-safe.
       * Needs generic mutate queue or something else.
     * Doesn't has protection for state.
       * Needs implement by `immutable.js` or anything else.
 