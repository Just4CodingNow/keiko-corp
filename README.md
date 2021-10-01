# keiko-corp
The greatest company ever created by Bruno

## Ensure text remains visible during webfont load
The easiest way to avoid showing invisible text while custom fonts load is to temporarily show a system font. By including font-display: swap in your @font-face style, you can avoid FOIT in most modern browsers
https://web.dev/font-display/?utm_source=lighthouse&utm_medium=unknown

## Override local copies
- First, run a fetch to update all origin/<branch> refs to latest: **git fetch --all**
- Backup your current branch:**git branch backup-master**
- Then, you have two options:**git reset --hard origin/master**
- OR If you are on some other branch:**git reset --hard origin/<branch_name>**
