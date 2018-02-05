# This is an example Express application

The example application comes equipped with parts following the example architecture
  * App level configuration is contained in app.js
  * Route and endpoint configuration is contained in endpoints.js
  * Endpoint handlers are defined in endpoints/*
  * Actual business logic is defined in services/*

You can run tests with `npm test`, but sadly most of them seem to fail. Maybe you can help fix some of them?

The routes for you to explore in this example are
  * /example
    * /hello
      Responds with a Hello World
    * /throw
      Throws an error on the server
    * /async
      Async versions of the above
      * /hello
      * /throw
    * /slowpoke
      A slow synchronous handler. Try to request it and then `/hello` immediately after.