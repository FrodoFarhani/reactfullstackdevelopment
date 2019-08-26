const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
//we require this like this because we r not going to use any object of that!
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

/**
 * app.use()
 * what we push inside it calls as middlewares
 * middleware: are tiny functions thaat can be used to modify
 * the incoming request to our app before they sent off to route handlers!
 * in our code when the request comes from to our app it goes into 3 middlewares,
 * cockieSession,and two passport middlewares
 * middlewares are greate location to locate some logic that are coming to all our
 * route handlers. exp: authentication...
 */

/**
 * we should tell to our app to use cookies using passport
 */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in mili seconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port 5000 ....');
});
