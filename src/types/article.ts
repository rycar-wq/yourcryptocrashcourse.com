export interface ArticleContentBlock {
  heading?: string;
  text?: string;
  list?: string[];
}

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  content: ArticleContentBlock[];
  author?: string;
  recommendedBook?: string;
}
