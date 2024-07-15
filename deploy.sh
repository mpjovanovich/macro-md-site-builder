# Commit local changes so I don't forget
git add .
git commit -m "Pre-deploy commit"
git push origin main 

# Build the site
npm run build && npm run start

# Remove upstream and local site branches
git push origin --delete site
git branch -D site

# Create a "site" orphan branch. Not sure if this will work with GitHub Actions trigger yet.
git checkout --orphan site

# Write over .gitignore file with the one for the site
cp .gitignore_site .gitignore

# Remove all files from the new branch
git reset

# Copy the contents of the "output" directory to the root o
mv output site

# Move the assets folder to the root of the repository
cp -r assets site/

# Add new files and push to site branch
git add site/* .github/*

# Commit and push
git commit -m "Deploy commit"
git push origin site --force

# Cleanup
rm -rf site

# Go back to main
git checkout main --force