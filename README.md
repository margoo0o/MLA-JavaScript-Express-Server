# MLA JavaScript Express Server

## Running Locally

**Note:** A mongoDB container runs on port 27018 to prevent conflicts with the MLA mongoDB instance.

```
npm install

# Run docker compose to spin up API container
docker compose up -d 

# Run, forcing rebuild to implement code changes
docker compose up -d --build --force-recreate
```