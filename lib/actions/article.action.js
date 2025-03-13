"use server";
import { revalidatePath } from 'next/cache';
import connectToDB from '../db/mongoose';
import Article from '@/lib/db/models/article.model';
import {getSimplifiedArticle} from '@/lib/utils'

export async function getAllArticles() {
  try {
    await connectToDB();
    const articles = await Article.find({},'_id title metaDescription slug type').lean();
    return { success: true, articles:JSON.parse(JSON.stringify(articles))};
  } catch (error) {
    console.error('Error fetching all articles:', error.message);
    return { success: false, error: error.message };
  }
}

export async function getArticle(slug) {
  try {
    await connectToDB();
    const article = await Article.findOne({ slug });
    if (!article) {
      return { success: false, error: 'Article not found' };
    }
    const simplifiedArticle = getSimplifiedArticle(article)
    return { success: true, article:simplifiedArticle };
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error.message);
    return { success: false, error: error.message };
  }
}

export async function deleteArticle(slug) {
  try {
    await connectToDB();
    const deletedArticle = await Article.findOneAndDelete({ slug });
    if (!deletedArticle) {
      return { success: false, error: 'Article not found' };
    }
    revalidatePath('/articles')
    return { success: true, message: 'Article deleted successfully' };
  } catch (error) {
    console.error(`Error deleting article with slug ${slug}:`, error.message);
    return { success: false, error: error.message };
  }
}

export async function getByArticlesType(type) {
  try {
    await connectToDB();
    const articles = await Article.find({ type });
    return { success: true, articles };
  } catch (error) {
    console.error(`Error fetching articles of type ${type}:`, error.message);
    return { success: false, error: error.message };
  }
}