
# Commit local changes so I don't forget
git add .
git commit -m "Pre-deploy commit"
git push origin master

# Build the site
npm run build && npm run start

# Create a "site" orphan branch. Not sure if this will work with GitHub Actions trigger yet.
git checkout --orphan site

# Copy the contents of the "output" directory to the root of the repository
cp -r output/* .

# # Build your site
# npm run build

# # Create a temporary directory and copy output contents
# mkdir tmp-gh-pages
# cp -r output/* tmp-gh-pages/
# cd tmp-gh-pages

# # Initialize a new git repository and add the remote
# git init
# git remote add origin https://github.com/mpjovanovich/macro-md-site-builder.git

# # Checkout a new orphan branch
# git checkout --orphan gh-pages

# # Add all files, commit, and push to gh-pages branch
# git add .
# git commit -m "Deploy to gh-pages"
# git push origin gh-pages --force

# # Cleanup
# cd ..
# rm -rf tmp-gh-pages
