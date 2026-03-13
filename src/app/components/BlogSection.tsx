import { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, ArrowLeft } from "lucide-react";

export function BlogSection() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "ad228058a49542a2a0bcaedb7d976c87";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=الجامعات OR "التعليم العالي" OR "universities"&language=ar&sortBy=publishedAt&pageSize=1&apiKey=${apiKey}`
        );

        setArticle(res.data.articles[0]);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب الأخبار:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-8">
        جارٍ تحميل أخبار الجامعات...
      </p>
    );
  }

  if (!article) {
    return (
      <p className="text-center py-8">
        لا توجد أخبار حالياً
      </p>
    );
  }

  return (
    <section
      id="blog"
      className="py-20 px-4"
      style={{ backgroundColor: "#f2f9f5" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-3"
            style={{ backgroundColor: "#0d2b5e15", color: "#0d2b5e" }}
          >
            أخبار الجامعات
          </span>

          <h2 className="text-4xl font-black text-gray-900">
            أحدث خبر عن الجامعات
          </h2>
        </div>

        {/* News Card */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 block"
        >
          {article.urlToImage && (
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            <h3 className="font-bold text-2xl mb-3">
              {article.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {article.description}
            </p>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <Calendar size={14} />
              {new Date(article.publishedAt).toLocaleDateString("ar")}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d2b5e]">
              اقرأ الخبر كامل <ArrowLeft size={16} />
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}