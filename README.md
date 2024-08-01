# MLA JavaScript Express Server

## Running Locally

**Note:** A mongoDB container runs on port 27017. You may need to update the port, or stop any existing MongoDB containers.

```
npm install

# Run docker compose to spin up API container
docker compose up -d 

# Run, forcing rebuild to implement code changes
docker compose up -d --build --force-recreate
```