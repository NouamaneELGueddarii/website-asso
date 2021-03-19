Arabic ={
    title: "الشبكة العالمية للقنيطريين",
    Home :"رئيسية",
    Verein :"جمعية",
    Aktivitäten:"أنشطة",
    kontakt:"اتصال",
    fotogalerie:"معرض الصور ومقاطع الفيديو",
    arbeitsfelder:"مجالات نشاط الجمعية",
};

function TranslateToArabic(){

    document.body.style.direction = "rtl";

    document.getElementById("Home").textContent = Arabic.Home;
    document.getElementById("title").textContent = Arabic.title;
    document.getElementById("Verein").textContent = Arabic.Verein;
    document.getElementById("Aktivitäten").textContent = Arabic.Aktivitäten;
    document.getElementById("Kontakt").textContent = Arabic.kontakt;
    document.getElementById("foto").textContent = Arabic.fotogalerie;
    document.getElementById("arbeitsfelder").textContent = Arabic.arbeitsfelder;

    alert(document.getElementById("Satzung"));

    return false;
 };