# Commit local changes so I don't forget
git add .
git commit -m "Pre-deploy commit"
git push origin main 

# Build the site
npm run build && npm run start

# Create a "site" orphan branch. Not sure if this will work with GitHub Actions trigger yet.
git checkout --orphan site

# Remove existing site
git rm -rf --cached .

# Copy the contents of the "output" directory to the root of the repository
mv output site

# Move the assets folder to the root of the repository
cp -r assets site/

# Add new files and push to site branch
cd site
git add .
git commit -m "Pre-deploy commit"
git push origin site

# Go back to main
cd ..
git checkout main