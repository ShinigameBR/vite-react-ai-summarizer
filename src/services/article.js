import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidAPIKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidAPIKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({query: (params) => `/summarize?url=${encodeURIComponent(params.articleURL)}&length=3&lang=pt&html=TRUE`})
    })
});

export const {useLazyGetSummaryQuery} = articleApi;