import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servImage from "../pilden/serv.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "../components/Footer";

const requirements = [
  { title: "اسم الطالب رباعي" },
  { title: "اسم المدرسة" },
  { title: "العام الدراسي" },
  { title: "النسبة / المجموع" },
  { title: "المسار (علمي / أدبي)" },
  { title: "رقم الجلوس" },
  { title: "نوع الشهادة" },
  { title: "اسم الوالدة" },
  { title: "إثبات شخصية" }
];

const requirement = [
  { title: "اسم الطالب رباعي" },
  { title: "اسم الوالدة" },
  { title: "اسم المدرسة" },
  { title: "الولاية" },
  { title: "المجموع" },
  { title: "رقم الجلوس (إن وجد)" },
  { title: "صورة شخصية" },
  { title: "الرقم الوطني" }
];

const posts = [
  {
    title: "تخصصات المنحة",
    category: "مصر",
    date: "27 فبراير، 2026",
    excerpt:
      "تعرف في الجدول التالي على أهم تخصصات منحة الحكومة المصرية الشاملة التي قمنا بسحبها من الموقع الرسمي.",
    img: "https://studyshoot.com/wp-content/uploads/2024/01/3-6.jpg",
    link: "https://studyshoot.com"
  },
  {
    title: "العطل الرسمية في تركيا",
    category: "تركيا",
    date: "27 فبراير، 2026",
    excerpt:
      "عدد العطل الرسمية في تركيا 12 عطلة على مدار السنة منها 6 عطل أعياد مختلفة.",
    img: "https://studyshoot.com/wp-content/uploads/2024/05/2-25.jpg",
    link: "https://studyshoot.com"
  }
];

export default function CertificateServices() {
  return (
    <div className="min-h-screen bg-[#f2f9f5]">

      {/* Hero */}
      <div className="relative h-80 w-full">
        <img
          src="https://egyaid.mohesr.gov.eg/assets/img/%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA.JPG"
          alt="certificate"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl md:text-2xl font-bold mb-4">
             استخراج وتجهيز الشهادات
          </h1>

         
        </div>
      </div>

      {/* تعريف ريتال */}
      <section className="py-10 flex justify-center">
        <div className="relative w-full max-w-6xl p-10 border-4 border-[#f2f9f5] rounded-t-[20px] flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg">

          <div className="flex-1 text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#154734]">خدمات ريتال التعليمية</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              يقدم مكتب ريتال مجموعة من الخدمات الخاصة بالشهادات الدراسية
              لمساعدة الطلاب في استخراج وتوثيق الشهادات وتسهيل جميع الإجراءات
              التعليمية بأسرع وقت ممكن.
            </p>
          </div>

        </div>
      </section>
      <section className="container mx-auto px-4 py-4">
  <div className="grid md:grid-cols-3 gap-10 items-center bg-[#f2f9f5] p-8 rounded-3xl shadow-lg">

    {/* المستشار التعليمي */}
   <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-auto transition-colors duration-500 hover:bg-[#e6f4f1]">
  <div className="flex items-center gap-4 mb-4">
    <img
      src="https://rital-sd.com/lovable-uploads/a5c80a15-6935-45ec-8852-551e961cc11f.png"
      alt="مستشار تعليمي"
      className="w-16 h-16 rounded-full shadow-md object-cover"
    />
    <h3 className="text-lg font-bold text-[#154734]">
      مستشار تعليمي
    </h3>
  </div>

  <p className="text-gray-600 leading-relaxed text-sm">
    مستشار تعليمي متخصص في شؤون الطلاب الوافدين، يقدّم محتوى موثوقًا
    مستندًا إلى مصادر رسمية وخبرة ميدانية لمساعدة الطلاب في اختيار
    التخصص المناسب وإكمال إجراءاتهم الدراسية.
  </p>
</div>

    {/* صورة واتساب */}
    <div className="flex justify-center">
      <img
        src="https://rital-sd.com/lovable-uploads/a5c80a15-6935-45ec-8852-551e961cc11f.png"
        alt="WhatsApp"
        className="w-64 rounded-2xl shadow-lg"
      />
    </div>

    {/* مشاركة المقال */}
    <div className="text-center space-y-4">

      <h3 className="text-lg font-bold text-[#154734]">
        شارك هذا المقال من خلال
      </h3>

      <div className="flex justify-center gap-4">

        <a
          href="https://m.facebook.com/sharer.php"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition"
        >
          f
        </a>

        <a
          href="https://twitter.com/intent/tweet"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
        >
          X
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-110 transition"
        >
          in
        </a>

        <a
          href="https://api.whatsapp.com/send"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:scale-110 transition"
        >
          W
        </a>

      </div>

    </div>

  </div>
</section>

      {/* خدمات ريتال */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-[#154734] text-center mb-10">
          خدمات تجهيز الشهادات
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-[#154734] mb-2">
              استخراج الشهادات الدراسية
            </h3>
            <p className="text-gray-600">
              نساعدك في استخراج الشهادات الدراسية الرسمية من الجهات المختصة
              بسهولة وسرعة.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">✔️</div>
            <h3 className="text-xl font-bold text-[#154734] mb-2">
              توثيق الشهادات
            </h3>
            <p className="text-gray-600">
              نقوم بإجراء كافة التوثيقات المطلوبة للشهادات لضمان قبولها
              في الجامعات والمؤسسات التعليمية.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-[#154734] mb-2">
              توصيل الشهادات
            </h3>
            <p className="text-gray-600">
              بعد الانتهاء من استخراج الشهادة وتوثيقها نقوم بتوصيلها للطالب
              في أسرع وقت ممكن.
            </p>
          </div>

        </div>
      </section>

      {/* متطلبات الثانوية */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-12">

          

          <div className="md:w-7/12 space-y-6">

            <h2 className="text-2xl font-bold text-center">
              متطلبات استخراج الشهادة الثانوية
            </h2>

            <ul className="relative border-r-2 border-gray-300 mr-4">

              {requirements.map((req, idx) => (
                <li key={idx} className="mb-6 mr-4 relative">
                  <h5 className="font-bold">{req.title}</h5>

                  <span className="absolute -right-6 top-2 w-3 h-3 bg-[#154734] rounded-full"></span>
                </li>
              ))}

            </ul>

            {/* ملاحظة */}
            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-lg">

              <p className="text-sm text-gray-700">
                <strong>ملاحظة:</strong> مطلوب شهادة الصف الثامن للطلاب
                دفعة <span className="font-bold">2023 و 2024</span>.
              </p>

            </div>

            <div className="text-center">
              <a
                href="https://wa.me/+201117740555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> تواصل واتساب
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* متطلبات الصف الثامن */}
      <section className="container mx-auto px-4 py-16">

        <h2 className="text-2xl font-bold text-center mb-10">
          متطلبات استخراج شهادة الصف الثامن
        </h2>

        <ul className="relative border-r-2 border-gray-300 mr-4 max-w-xl mx-auto">

          {requirement.map((req, idx) => (
            <li key={idx} className="mb-6 mr-4 relative">
              <h5 className="font-bold">{req.title}</h5>

              <span className="absolute -right-6 top-2 w-3 h-3 bg-[#154734] rounded-full"></span>
            </li>
          ))}

        </ul>

      </section>

      {/* المقالات */}
      <section className="container mx-auto px-4 py-8">

        <h2 className="text-3xl font-bold text-[#154734] mb-8 text-center">
          أحدث المقالات
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">

              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />

              <div className="p-4">

                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold mb-2">{post.title}</h3>

                <p className="text-gray-600 text-sm">{post.excerpt}</p>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* زر واتساب */}
      <a
        href="https://wa.me/+201117740555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      <Footer />

    </div>
  );
}