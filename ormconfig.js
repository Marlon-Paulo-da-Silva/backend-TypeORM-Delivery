module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "ssl": true,
   "extra": {
       "ssl": { "rejectUnauthorized": false }
      },
   "entities": [
      "build/models/**/*.js"
   ],
   "migrations": [
      "build/database/migrations/**/*.js"
   ],
   // "entities": [
   //    "src/models/**/*.ts"
   // ],
   // "migrations": [
   //    "src/database/migrations/**/*.ts"
   // ],
   "subscribers": [
      "build/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migrations",
      "subscribersDir": "src/subscriber"
   }
}