# TwitterFeed Finder

The TwitterFeed Finder is an intuitive Single Page Application(SPA) for viewing twitter feeds. This app is built with React and Redux libraries and utilizes the [Twitter API](https://developer.twitter.com/en/docs). 

### Installing

Clone the project and follow the instructions below to run the project locally. Note that Twitter developer credentials (consumer/access_token keys and secrets) will need to be input into the project's config file. See the Twitter Config section below for more details

install project dependencies and node modules by navigating to the project on a terminal and run 'npm install.'

```
npm install
```

After project dependencies have been installed, run 'npm start' to run the React App. By default, this App will run on http://localhost:3000. 

```
npm start
```

In a separate terminal, navigate to the project and run 'node app.js' to run the Node Server. This server is configured to run port 80. 

```
node server.js
```

Once both Frontend and Backend are running, you will be able to access the Application from your local browser at http://localhost:3000/.

## Twitter Config

To run the project, you will need to enter your own Twitter developer credentials into config.js. 

  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: ""

## Authors

* **Thomas Toan** - *Software Engineer* 

