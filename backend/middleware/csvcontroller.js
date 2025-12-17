import { Parser } from 'json2csv';

export const jsonToCsv = (data) => {
    const fields = ['title', 'price', 'url', 'source', 'createdAt'];
    const parser = new Parser({ fields });
    return parser.parse(data);
};