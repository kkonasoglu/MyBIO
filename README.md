# 📁 Kişisel Bio & Portföy Sitesi

Mat koyu temalı, sıfır neon barındıran, açılışta siyah bir karşılama ekranı ile başlayan ve ekran genişliğine göre akıcı şekillenen responsive kişisel portföy/bio sitesi.

---

## 🎬 Açılış Ekranı (Intro / Splash Screen)
Sayfa ilk açıldığında tam ekran kapkara bir zemin üzerinde **Adınız Soyadınız** belirir ve kısa bir süre sonra yumuşak bir geçişle ana site açılır (dilenirse ekrana tıklanarak da anında geçilebilir).

`index.html` içinde açılış ekranındaki adınızı değiştirmek için:
```html
<div id="introScreen" class="intro-screen">
  <div class="intro-content">
    <h1 class="intro-name">Adınız Soyadınız</h1>
    <div class="intro-line"></div>
  </div>
</div>
```

---

## 🛠️ Nasıl Özelleştirilir?

### 1. Ana Sayfa Ad, Soyad ve Ünvan
`index.html` dosyasında şu satırları düzenleyin:
```html
<h1 class="name">Adınız Soyadınız</h1>
<p class="role-badge">Yazılım Geliştirici & Tasarımcı</p>
```

### 2. Bio Açıklaması
`<p class="bio-text">` etiketinin içindeki metni kendi tanıtım yazınızla değiştirin.

### 3. Sosyal Medya Linkleri
`<div class="social-links">` altındaki linkleri kendi profil adreslerinizle güncelleyin:
```html
<a href="https://github.com/kullaniciadiniz" ...>
<a href="https://linkedin.com/in/kullaniciadiniz" ...>
<a href="https://x.com/kullaniciadiniz" ...>
```

### 4. Projeleriniz
Her bir `<a class="project-card">` bloğunu kendi projelerinize göre çoğaltabilir veya silebilirsiniz:
- `href`: Projenin bağlantı linki.
- `card-title`: Proje başlığı.
- `card-desc`: Proje açıklaması.
- `tech-tag`: Kullanılan teknolojiler.

---

## 🚀 Çalıştırma
`index.html` dosyasına çift tıklayarak tarayıcınızda açabilirsiniz.
