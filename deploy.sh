# Build your site
npm run build

# Create a temporary directory and copy output contents
mkdir tmp-gh-pages
cp -r output/* tmp-gh-pages/

# Navigate to the temporary directory
cd tmp-gh-pages

# Initialize a new git repository and add the remote
git init
git remote add origin https://github.com/your-username/your-repo.git

# Checkout a new orphan branch
git checkout --orphan gh-pages

# Add all files, commit, and push to gh-pages branch
git add .
git commit -m "Deploy to gh-pages"
git push origin gh-pages --force

# Cleanup
cd ..
rm -rf tmp-gh-pages
