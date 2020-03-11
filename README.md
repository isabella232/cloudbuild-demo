# cloudbuild-demo

a project to demonstrate ci-cd with cloud build and helm deploys on GKE  

application from https://github.com/paulbouwer/hello-kubernetes/  


# local dev

git clone  
docker build . -t hello-k8s  
docker run  -p 8181:8080 hello-k8s  
http://127.0.0.1:8181/ 


# devOps Principles 
Teams modeled around business domain  
Culture of automation  
Hide implementation details  
De centralize all things  
Deploy independently  
Consumer first  
Isolate failure  

# suggestions
build the dev, qa, stage, production environment deployments before your write code  
share the responsibility of the CI/CD pipeline care and feeding  
try new things in the CI/CD pipeline, CI/CD has a lot of moving parts and is used a lot, so take risks with it and learn how to support new features in CI/CD before going to higher environments  


# encrypt env file
```
gcloud kms encrypt \
  --plaintext-file=.env \
  --ciphertext-file=.env.enc \
  --location=global \
  --keyring=cloudbuild-demo-keyring \
  --key=cloudbuild-demo-env
```

