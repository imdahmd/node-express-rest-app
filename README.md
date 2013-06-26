## Purpose

To demonstrate http server with GET and POST handlers, written in nodejs using [expressjs framework](http://expressjs.com/).
Please contrast the code here with the code in [node-simple-rest-app](https://github.com/imdhmd/node-simple-rest-app)

### How does it work

##### (0) Get the dependencies (these have been specified in `package.json`)

`npm install`

##### (1) Start the server

`./node_modules/.bin/supervisor app.js`

Using supervisor allows you to make changes to the application code and see the changes on running application immediately, without requiring application restart. This is called *hot code deployment*.

##### (2) On browser go to:

`http://localhost:3000/?key=a`

You should see that `apple` shows up in the browser.
This is because `data.json` contains key value pairs, where `apple` corresponds to `a`, `fan` corresponds to `f` etc.

Try: `http://localhost:3000?key=f`

Now try: `http://localhost:3000?key=z`
This should show `Not found` if nothing exists corresponding to `z`


##### (3) From a separate command prompt, execute the following command:

`
curl -XPOST -H 'Content-Type: application/json' 'http://localhost:3000/newData' -d '{
  "z": "zebra"
}'
`

This is a POST http request (we are also adding a http header saying that the request body is of type json). This intends to add `zebra` value corresponding to `z` key in `data.json`.
Verify that a new entry corresponding to `z` now exists in `data.json`.

Also, you would get a response saying:
`Your data is saved: {"a":"apple","f":"fan","e":"elephant","b":"bat","z":"zebra"}`

Now try to go to `http://localhost:3000?key=z` on browser.

##### (4) From browser go to:

`http://localhost:3000/multi?key1=z&key2=f`

This should show `value1 is zebra and value2 is fan` as response.

This example is to illustrate the use of `routes`.
