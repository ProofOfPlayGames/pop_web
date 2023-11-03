docker build . -t pop_web_server
docker stop pop_web_server_container
docker rm pop_web_server_container
docker run --network=host --name pop_web_server_container -p 49160:443 -d pop_web_server
