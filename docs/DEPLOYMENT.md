# Deployment notes Do not enable automatic live deployment until: 1. The website previews correctly locally.
2. Every image path resolves locally.
3. The GitHub repository contains only clean website files.
4. The live server path is confirmed.
5. A manual backup of the current live website has been taken. Required host details: ```text
SSH_HOST
SSH_USER
SSH_PORT
REMOTE_PATH
``` The example workflow is stored at: ```text
deployment/deploy-to-server.yml.example
```
