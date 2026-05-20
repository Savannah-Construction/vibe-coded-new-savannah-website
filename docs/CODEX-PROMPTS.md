# Useful Codex prompts

## First audit

```text
Audit this static website project. Do not edit files yet. Check structure, broken paths, missing files, GitHub hygiene, asset size risks, accessibility issues, search engine optimisation basics and deployment risks.
```

## Build homepage

```text
Improve the homepage using the existing Savannah Construction brand colours. Keep the project as static HTML, CSS and JavaScript. Do not add React, Node, a package manager or a build system.
```

## Asset review

```text
Review the assets folder. Tell me which files are suitable for web use, which are too large, which should be compressed, and which should be kept out of GitHub.
```

## Path fix only

```text
Fix broken local paths only. Do not change layout, wording, colours or spacing.
```

## Pre-commit check

```text
Review all changes since the last commit. Identify anything unsafe to push to GitHub, including secrets, raw files, logs, databases, large media or broken links.
```
