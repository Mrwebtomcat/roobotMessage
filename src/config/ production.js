const  production = {
  pg:{
    user: "postgres", // env var: PGUSER
    database: "testing", // env var: PGDATABASE
    password: "666", // env var: PGPASSWORD
    host: "localhost", // Server hosting the postgres database
    port: 5433, // env var: PGPORT
    max: 100, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
  } 
}
