const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, 'app', 'blog', 'blogData.ts');
const content = fs.readFileSync(blogDataPath, 'utf8');

// Match keys like "post-7" or "post-22" or similar
// and find their main title field.
const postRegex = /"post-(\w+)"\s*:\s*\{[\s\S]*?\b(?:title|["']title["'])\s*:\s*["']([^"']+)["']/g;

let match;
const posts = [];
while ((match = postRegex.exec(content)) !== null) {
  // We want to skip section titles like "Case in Point" or faqs questions.
  // The main blog post title is defined directly inside the post-X object.
  // To verify it is the main title, the match block should not cross into the next post block.
  const matchedBlock = match[0];
  const nextPostIndex = matchedBlock.indexOf('"post-', 10);
  
  if (nextPostIndex === -1) {
    posts.push({
      id: `post-${match[1]}`,
      title: match[2],
      length: match[2].length
    });
  } else {
    // If it crossed into another post, it means this post didn't have a main title, or regex was too greedy.
    // Let's debug this.
  }
}

console.log(`Found ${posts.length} posts:`);
posts.forEach(p => {
  console.log(`ID: ${p.id} (Length: ${p.length}) -> "${p.title}"`);
});
