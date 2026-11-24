/**
 * KİŞİSEL BİO SAYFASI YARDIMCI SCRIPTLERİ
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Siyah Açılış Ekranı (Intro / Splash Screen) Yönetimi
  const introScreen = document.getElementById('introScreen');
  const body = document.body;

  if (introScreen) {
    body.classList.add('intro-active');

    const closeIntro = () => {
      introScreen.classList.add('hide');
      body.classList.remove('intro-active');
    };

    // 1.8 saniye sonra siyah ekran yumuşakça kaybolup ana siteyi açar
    const timer = setTimeout(closeIntro, 1800);

    // Kullanıcı beklemek istemezse ekrana tıklayarak anında geçebilir
    introScreen.addEventListener('click', () => {
      clearTimeout(timer);
      closeIntro();
    });
  }

  // 2. Dinamik Yıl Ayarı
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
