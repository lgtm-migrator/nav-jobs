const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

interface IData {
  toString: () => string;
}

interface IRequest {
  headers: { host: string };
}

interface IResult {
  writeHead: (arg0: string, arg1: { "Content-Type": string }) => void;
  end: (arg0: string) => void;
}

interface ILinks {
  url: string;
  changefreq: string;
  priority: number;
}

const siteMapGenerator = async (_request: IRequest, result: IResult) => {
  const links: ILinks[] = [{ url: "/", changefreq: "daily", priority: 0.3 }];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  result.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: IData) => data.toString());

  result.end(xmlString);
};

export default siteMapGenerator;
