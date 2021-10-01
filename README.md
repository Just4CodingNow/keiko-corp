# keiko-corp
The greatest company ever created by Bruno

## Ensure text remains visible during webfont load
The easiest way to avoid showing invisible text while custom fonts load is to temporarily show a system font. By including font-display: swap in your @font-face style, you can avoid FOIT in most modern browsers
https://web.dev/font-display/?utm_source=lighthouse&utm_medium=unknown

## Override local copies Git
- First, run a fetch to update all origin/<branch> refs to latest: **git fetch --all**
- Backup your current branch:**git branch backup-master**
- Then, you have two options:**git reset --hard origin/master**
- OR If you are on some other branch:**git reset --hard origin/<branch_name>**
  
*Check more information: https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud*
  

## How to automate unused CSS removal with UnCSS
1. Install Node.js 
2. Install Grunt **npm install -g grunt-cli**
3. Open your project folder
4. Install UnCSS and CSSMin **npm install grunt-uncss grunt-contrib-cssmin --save-dev**
5. Create a gruntfile.js file
6. Run Grunt **grunt**
  
*Check more information: https://www.keycdn.com/blog/remove-unused-css*
  
## Image elements do not have explicit width and height
  1. In VSC located the end tag of of an image **>**
  2. Press **Shift+command+p**
  3. Type **Update image size**
  4. Press Enter and it will automaticlly add image size
  *Learn more: https://christianheilmann.com/2021/04/14/quick-vs-code-tip-automatically-add-image-width-and-height-to-images/*
  
## To Do:
  - Using Imagemin with Grunt to opmize images size - https://web.dev/codelab-imagemin-grunt/
  - Extract critical CSS - https://web.dev/extract-critical-css/
  - 
