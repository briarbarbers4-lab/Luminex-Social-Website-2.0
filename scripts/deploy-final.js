import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(__dirname, '..');

console.log('Deploying Luminex Social Website to Vercel...');
console.log(`Project directory: ${projectDir}`);

try {
  // Change to project directory
  process.chdir(projectDir);
  console.log('Changed to project directory');

  // Check git status
  console.log('\nChecking git status...');
  const status = execSync('git status', { encoding: 'utf-8' });
  console.log(status);

  // Add all changes
  console.log('Adding all changes...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  console.log('Committing changes...');
  execSync('git commit -m "feat: Complete Luminex Social website implementation with all components, design system, and styling"', { stdio: 'inherit' });

  // Push to GitHub
  console.log('Pushing to GitHub...');
  execSync('git push origin v0/khattak20065-7187-2880b938', { stdio: 'inherit' });

  console.log('\nDeployment successful! Changes pushed to GitHub.');
  console.log('Vercel will automatically deploy the updated branch.');
} catch (error) {
  console.error('Deployment error:', error.message);
  process.exit(1);
}
