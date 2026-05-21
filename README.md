# Savannah Construction Website - Reviewed Complete Static Build

This package combines:

- current live-site content and structure
- the supplied image/code zip
- local image references using the original `/img/...` style paths
- repo-safe files for Visual Studio Code and GitHub

## Use

Copy this folder content into:

```text
C:\CODE\Savannah\Website\savannah-website
```

Then run:

```powershell
git status
git add .
git commit -m "Rebuild website with original image references"
git push
```

## Important

Raw `.CR3` files, video files, logs and databases are intentionally not included. They are not safe or practical for the GitHub website repo.

## Image paths

The new site uses `/img/...` paths, matching the original supplied asset structure rather than moving images into `assets/img`.

See `docs/IMAGE-MAPPING.md` and `data/image-compatibility-map.json`.


## Package note

This reviewed package includes the complete static website code and the referenced images only. Large unused image dumps were excluded so the zip can upload and the repo stays safe for GitHub.
