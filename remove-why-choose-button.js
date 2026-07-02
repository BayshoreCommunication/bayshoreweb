const fs = require('fs');
const path = require('path');

const folders = [
  "brandon-seo-company",
  "law-firm-seo-fort-myers",
  "lawyer-seo-agency-tampa",
  "local-seo-for-lawyers-florida",
  "local-seo-services-for-small-business-naples-florida",
  "orlando-law-firm-seo-agency",
  "plant-city-seo-company",
  "real-estate-seo-services-in-florida",
  "seo-company-dunedin",
  "seo-company-largo-fl",
  "seo-company-spring-hill",
  "seo-company-wesley-chapel",
  "seo-services-for-dentists-in-tampa",
  "seo-services-for-small-businesses-in-florida"
];

const baseDir = path.join(__dirname, 'components', 'SEO-Service');

for (const folder of folders) {
  const fileWhyChoose = path.join(baseDir, folder, 'WhyChooseBayshore.tsx');
  if (fs.existsSync(fileWhyChoose)) {
    let content = fs.readFileSync(fileWhyChoose, 'utf8').replace(/\r\n/g, '\n');
    
    const regexUncommented = /<button\b[^>]*>[\s\S]*?Start Growing Your Business[\s\S]*?<\/button>/g;
    const regexCommented = /\{\/\*\s*<button\b[^>]*>[\s\S]*?Start Growing Your Business[\s\S]*?<\/button>\s*\*\/}/g;

    if (regexCommented.test(content)) {
      content = content.replace(regexCommented, '');
      fs.writeFileSync(fileWhyChoose, content, 'utf8');
      console.log(`Removed commented button from WhyChooseBayshore.tsx for ${folder}`);
    } else if (regexUncommented.test(content)) {
      content = content.replace(regexUncommented, '');
      fs.writeFileSync(fileWhyChoose, content, 'utf8');
      console.log(`Removed button from WhyChooseBayshore.tsx for ${folder}`);
    } else {
      console.log(`No matching button found in WhyChooseBayshore.tsx for ${folder}`);
    }
  }
}

console.log('Done removing WhyChooseBayshore buttons!');
