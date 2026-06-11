/**
 * Claude Service Prompts - Bengkel Wiguna
 * Optimized prompts for automotive/ repair shop content
 */

export const claudeServicePrompts = {
  /**
   * Generate SEO meta description
   */
  seoDescription: ({ content, maxLength = 160, targetKeywords = [] }) => `
Generate a SEO-optimized meta description for this content from Bengkel Wiguna (automotive repair shop).

Content summary: ${content.substring(0, 500)}

Requirements:
- Maximum ${maxLength} characters
- Include natural mention of: ${targetKeywords.join(', ') || 'automotive services, car repair'}
- Action-oriented language
- Local SEO focus (Depok, West Java, Indonesia)

Output only the meta description, nothing else.
`.trim(),

  /**
   * Generate JSON-LD schema for services
   */
  serviceSchema: (service) => `
Generate JSON-LD structured data for this automotive service from Bengkel Wiguna.

Service: ${service.title?.rendered || service.name}
Description: ${service.content?.rendered || service.description || ''}
Price: ${service.meta?.price_range || '$$$'}
Location: Depok, West Java, Indonesia

Output valid JSON-LD for a LocalBusiness/Service.
`.trim(),

  /**
   * Generate content suggestions
   */
  contentSuggestions: (topic, count = 5) => `
Suggest ${count} blog post topics for Bengkel Wiguna automotive repair shop blog.
Topic focus: ${topic}

For each suggestion, provide:
- Title (in Indonesian, SEO-optimized)
- Meta description (max 160 chars)
- Target keyword
- Suggested category

Output as JSON array.
`.trim(),

  /**
   * Translate to Indonesian
   */
  translateIndonesian: (englishContent) => `
Translate this content to Indonesian with automotive/ repair shop context.
Maintain technical accuracy for car parts, maintenance procedures, and service terminology.

Content to translate:
${englishContent}

Technical terms that should use Indonesian equivalents where natural:
- "engine" → "mesin"
- "tire" → "ban"
- "brake" → "rem"
- "oil change" → "penggantian oli"
- "battery" → "aki"
- "alignment" → "spooring"
- "balancing" → "balancing"
- "AC/ air conditioning" → "AC/ pendingin"

Output only the translated content.
`.trim(),

  /**
   * SEO optimization
   */
  seoOptimizer: (content, focusKeyword) => `
Analyze and optimize this content for SEO focusing on: "${focusKeyword}"

Content:
${content.substring(0, 1000)}

Provide improvements for:
1. Title optimization
2. Meta description
3. Heading structure (H2, H3 suggestions)
4. Keyword density analysis
5. Internal link opportunities
6. Content quality improvements

Output as structured JSON.
`.trim(),
}
