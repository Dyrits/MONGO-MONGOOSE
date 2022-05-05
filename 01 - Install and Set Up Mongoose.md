# Install and Set Up Mongoose

(...)

In this challenge, you will set up a MongoDB Atlas database and import the required packages to connect to it.

Follow [this tutorial](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/) to set up a hosted database on MongoDB Atlas.

---

Add `mongodb@~3.6.0` and `mongoose@~5.4.0` to the project’s `package.json`. Then, require mongoose as `mongoose` in `myApp.js`. Create a `.env` file and add a `MONGO_URI` variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the `=` in environment variables. For example, `MONGO_URI='VALUE'`. When you are done, connect to the database using the following syntax:

```javascript
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```