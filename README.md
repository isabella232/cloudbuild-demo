# cloudbuild-demo

a project to demonstrate ci-cd with cloud build and helm deploys on GKE  

application from https://github.com/paulbouwer/hello-kubernetes/  


# local dev

git clone  
docker build . -t hello-k8s  
docker run  -p 8181:8080 hello-k8s  
http://127.0.0.1:8181/ 