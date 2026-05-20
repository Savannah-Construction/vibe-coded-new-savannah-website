# Deployment notes

Do not enable automatic live deployment until:

1. The website previews correctly locally.
2. The GitHub repository contains only clean website files.
3. The web host confirms SSH access.
4. The live server path is confirmed.
5. A manual backup of the current live website has been taken.

## Required hosting details

Get these from the web host:

```text
SSH_HOST
SSH_USER
SSH_PORT
REMOTE_PATH
```

Also confirm whether SSH key login is supported.

## Enabling deployment later

1. Copy `deployment/deploy-to-server.yml.example`.
2. Paste it into `.github/workflows/deploy.yml`.
3. Add the required GitHub repository secrets.
4. Commit and push to `main`.

After that, pushes to `main` can deploy automatically.
