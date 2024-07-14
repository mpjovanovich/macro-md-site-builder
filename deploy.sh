# Commit local changes so I don't forget
git add .
git commit -m "Pre-deploy commit"
git push origin main 

# Build the site
npm run build && npm run start

# Create a "site" orphan branch. Not sure if this will work with GitHub Actions trigger yet.
git checkout --orphan site

# Write over .gitignore file with the one for the site
mv .gitignore_site .gitignore

# Remove existing site
git rm -rf --cached .

# Copy the contents of the "output" directory to the root of the repository
mv output site

# Move the assets folder to the root of the repository
cp -r assets site/

# Add new files and push to site branch
git add site/*
git add .github/*

# Commit and push
git commit -m "Pre-deploy commit"
git push origin site

# Go back to main
git checkout main