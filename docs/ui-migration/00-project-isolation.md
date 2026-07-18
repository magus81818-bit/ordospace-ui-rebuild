# Project isolation

## Source of truth

- Read-only source repository: `C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ORDOSPACE_rebuild`
- Copied functional source: `ORDOSPACE_rebuild/react-mvp`
- New local repository: `C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild`
- New GitHub repository: `https://github.com/magus81818-bit/ordospace-ui-rebuild`

The original repository's files, branch, Git configuration, remote, dependencies, and build outputs are not modified. All installs and builds run only in the new repository.

## Hosting boundary

Round 1 creates no Vercel project, contains no `.vercel` directory, and copies no Vercel metadata. A future `ordospace-ui-rebuild` deployment must remain independent from the existing ORDO deployment.
