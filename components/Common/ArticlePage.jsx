import { cache } from 'react';
import sanitizeHtml from 'sanitize-html';

const ArticlePage = async ({ content }) => {
  const sanitizedHTML = await sanitizeContent(content);

  return <article className='article' dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></article>;
};

const sanitizeContent = cache(async (content) => {
  if (!content) {
    return '';
  }

  const sanitized = sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h2', 'h3', 'h4', 'h5']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['id'],
    },
  });

  // Add IDs to headings using string manipulation
  let result = sanitized;
  const headingRegex = /<(h[2-5])>(.*?)<\/\1>/gs; // Matches h2 to h5 tags

  result = result.replace(headingRegex, (match, tag, text) => {
    const id = text.toLowerCase().replace(/\s+/g, '-');
    return `<${tag} id="${id}">${text}</${tag}>`;
  });

  return result;
});

export default ArticlePage;