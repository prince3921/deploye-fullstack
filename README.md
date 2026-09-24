### complete deployement steps

1. make client application
2. make server application
3. docrize the client and server application seprately using Dockerfile
4. make nginx.conf file for `client application` and copy it to the nginx container
5. docker-compose through run client and server application both

### run application
git clone https://github.com/prince3921/deploye-fullstack.git
cd deploye-fullstack

```sh
git clone https://github.com/prince3921/deploye-fullstack.git
cd deploye-fullstack

# run all containers in background
docker compose up -d

# remove all containers and networks 
docker compose down
```


