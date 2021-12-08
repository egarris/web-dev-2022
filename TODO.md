## TODO

- [ ] Notify other fellows to make their repository -- maybe even send it out on Sunday to show a combined repo
- [ ] Set up the hooks repository

## Assets

- markdown files, images, videos
- code snippets
  - stackblitz.com

## Git Subtree

- Possible folder structure:
  - By day (numeric)
  - By topic
- [ ] Make this read-only for now


Subtree commands

```bash
git subtree add --prefix 01-react-hooks react-hooks main --squash
git subtree pull --prefix 01-react-hooks react-hooks main --squash
```
