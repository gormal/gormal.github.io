export type ArticleMetadata = {
    title: string,
    date: Date,
    description: string,
    author: string,
    timeToRead: number,
    path: string
}

export async function getNewestArticlesMetadata(limit: number): Promise<ArticleMetadata[]>
{
    const { data } = await useAsyncData(`content-/blog`, async () => {
        return await queryContent('blog')
            .only(['title', 'description', 'date', '_path', 'timeToRead', 'author'])
            .sort({ date: -1 })
            .limit(limit)
            .find()
    });

    return data.value?.map(article => ({
        title: article.title || 'unknown',
        date: article.date,
        description: article.description,
        timeToRead: article.timeToRead,
        path: article._path || '',
        author: article.author
    })) || [];
}

export async function getAllArticlesMetadata(): Promise<ArticleMetadata[]>
{
    const { data } = await useAsyncData(`content-/blog`, async () => {
        return await queryContent('blog')
            .only(['title', 'description', 'date', '_path', 'timeToRead', 'author'])
            .sort({ date: -1 })
            .find()
    });

    return data.value?.map(article => ({
        title: article.title || 'unknown',
        date: article.date,
        description: article.description,
        timeToRead: article.timeToRead,
        path: article._path || '',
        author: article.author
    })) || [];
}