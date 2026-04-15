const { execSync } = require('child_process');
const path = require('path');

const projectRoot = '/vercel/share/v0-project';

try {
  console.log('Starting deployment process...\n');
  
  // Change to project directory
  process.chdir(projectRoot);
  
  // Check if git is initialized
  try {
    execSync('git status', { stdio: 'pipe' });
    console.log('Git repository found');
  } catch (e) {
    console.log('Initializing git repository...');
    execSync('git init', { stdio: 'inherit' });
    execSync('git remote add origin https://github.com/briarbarbers4-lab/Luminex-Social-Website-2.0.git', { stdio: 'inherit' });
  }

  // Configure git
  console.log('\nConfiguring git...');
  execSync('git config user.email "v0[bot]@users.noreply.github.com"', { stdio: 'inherit' });
  execSync('git config user.name "v0[bot]"', { stdio: 'inherit' });

  // Add all changes
  console.log('\nAdding files...');
  execSync('git add -A', { stdio: 'inherit' });

  // Check if there are changes to commit
  const status = execSync('git status --porcelain', { encoding: 'utf-8' });
  
  if (status.trim()) {
    console.log('\nCommitting changes...');
    execSync('git commit -m "feat: Build Luminex Social website with complete design system, components, and styling\n\nImplemented:\n- Design system with dark theme and 5-color palette\n- Navbar with sticky nav and gradient CTA\n- Hero section with dual CTAs and auto-scrolling marquee\n- Stats bar, Services cards, Portfolio grid\n- Process timeline, Testimonials, About section\n- Full-width CTA with FAQ accordions\n- Footer with links and social icons\n\nCo-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"', { stdio: 'inherit' });
    
    console.log('\nPushing to GitHub...');
    execSync('git push -u origin v0/khattak20065-7187-2880b938', { stdio: 'inherit' });
    console.log('\nDeployment successful! Changes pushed to GitHub.');
    console.log('Vercel will automatically deploy the changes.');
  } else {
    console.log('\nNo changes to commit.');
  }

} catch (error) {
  console.error('Deployment error:', error.message);
  process.exit(1);
}
