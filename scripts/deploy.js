import { execSync } from 'child_process';

try {
  console.log('Starting deployment...');
  
  // Configure git if needed
  execSync('git config --global user.email "v0[bot]@users.noreply.github.com"', { stdio: 'inherit' });
  execSync('git config --global user.name "v0[bot]"', { stdio: 'inherit' });
  
  // Check git status
  console.log('\nCurrent git status:');
  execSync('git status', { stdio: 'inherit' });
  
  // Add all changes
  console.log('\nAdding changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit changes
  console.log('\nCommitting changes...');
  execSync('git commit -m "feat: Implement Luminex Social website with all components and design system\n\n- Added IMPLEMENTATION1.md with detailed implementation plan\n- Created design system with dark theme and custom color palette\n- Built 10 components: Navbar, Hero, Stats, Services, Portfolio, Process, Testimonials, About, CTA, Footer\n- Implemented responsive layout with Tailwind CSS\n- Added gradient effects, glow animations, and HUD-styled elements\n- Mobile-first design with hamburger navigation"', { stdio: 'inherit' });
  
  // Push to GitHub
  console.log('\nPushing to GitHub...');
  execSync('git push origin v0/khattak20065-7187-2880b938', { stdio: 'inherit' });
  
  console.log('\n✅ Deployment complete! Changes pushed to GitHub.');
  console.log('Vercel will automatically deploy from: https://vercel.com/khattak20065-7187s-projects/v0-luminex-social-website-2-0');
  
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
