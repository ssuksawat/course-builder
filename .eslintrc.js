module.exports = {
   "extends": "airbnb",
   "installedESLint": true,
   "env": {
     "browser": true,
     "node": true
   },
   "parser": "babel-eslint",
   "import/resolver": "webpack",
   "ecmaFeatures": {"jsx": true},
   "plugins": ["react"],

   // Overriding Airbnb style-guide
   "rules": {
     "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
     "no-use-before-define": ["error", { "functions": false }],
     "no-param-reassign": 0,
     "spaced-comment": 0,
     "new-cap": 0,
     "arrow-body-style": 0
   },
   "globals": {
     "$": true
   }
};
