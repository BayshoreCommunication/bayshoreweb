interface BlogData {
  data?: any[];
  error?: string;
}

export default async function GetAllBlogData(): Promise<BlogData> {
  const apiUrl = process.env.NEXT_PUBLIC_BLOG_API_URL || 'https://backend-bayshore.vercel.app';
  const endpoint = `${apiUrl}/site/blog`;

  try {
    const response = await fetch(endpoint, {
      next: { 
        revalidate: 300, // 5 minutes cache
        tags: ['blog-data'] 
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Blog API Error: ${response.status} ${response.statusText}`);
      return { data: [], error: `Failed to fetch blogs: ${response.statusText}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Blog API Fetch Error:', error);
    return { 
      data: [], 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
