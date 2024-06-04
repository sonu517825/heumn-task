1. run command [ git clone https://github.com/sonu517825/heumn-task.git ]
2. run command [ cd heumn-task]  (make sure in this dir)
3. run command [ npm i ]
4. create .env file at root level put all keys

# .env sample 
    APP_PORT = 3000
    DB_NAME = heumn_test
    DB_HOST = 127.0.0.1
    DB_PORT = 27017
    JWT_SECRET = 'this is my secret'

5. run command [ npm start ] OR [ npm run dev ]

# successfully running app sample

    ┌────────────┬─────────────────────┐
    │  (index)   │       Values        │
    ├────────────┼─────────────────────┤
    │  APP_PORT  │       '3000'        │
    │  DB_NAME   │    'heumn_test'     │
    │  DB_HOST   │     '127.0.0.1'     │
    │  DB_PORT   │       '27017'       │
    │ JWT_SECRET │ 'this is my secret' │
    └────────────┴─────────────────────┘
    Running at port:  3000
    MongoDB Database connected to: heumn_test

6. open api doc URL: [ http://localhost:3000/api-doc ]

