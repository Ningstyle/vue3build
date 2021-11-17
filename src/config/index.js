export const language = 'cn'   /*国际化，cn是中文，en是英文*/
const baseUrl = 'https://www.mzili.com.cn'
export const BASE_URL = process.env.NODE_ENV =='development'?'/api':baseUrl