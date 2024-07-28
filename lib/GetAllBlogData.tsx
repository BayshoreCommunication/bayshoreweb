export default async function GetAllBlogData() {
  const bloData = await fetch('https://backend-bayshore.vercel.app/site/blog', {
    next: { revalidate: 200 },
  });
  return bloData.json();
}
