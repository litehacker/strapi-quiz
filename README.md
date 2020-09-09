# Bir Sınav Sistemi!

Kullanıcımız kaydoluyor. Kayıtlı olduğu bilgileriyle girişini tamamlıyor. **Strapi** dönüşte JWT gönderiyor. Sayesinde kullanıcı tüm sorgularına `/sinav/` veya `/profil/` kendini tanımlayarak karşılığını alıyor. 

## Strapi için koşması gereken komutlar:
`npm install` komutu direkt ise yaramadi. illa `-global` olarak install etmem gerekiyordu. Komutu: `npm i -g`  

`yarn build` admin paneli olusturuyor  
`yarn start` olusturdugu paneli kosuyor.  
yazilana gore eger ki `yarn develop` yazarsak, bunlari otomatik olusturur. bende olusmadi bu yuzden yukaridaki iki adimi sirasiyla yaptim.
# Kullanıcı Yetkileri
Kullancı türlerimiz: `Public`, `User`, `Authenticated`


## Public Kullanıcı

Public olan kullanıcımız giriş yapmadan sayfalarda dolaşandır. Kaç adet farklı sınavımız var, sınavların soru bankasında kaçar adet sorusu bulunuyor da bilebilir. Varsayılmış şekilde `/sinavlar` veya `/exams` (hangisini tanımlarsak sınavın genel bilgisi için) adreslerinden veri çekmeye hakkı var.  
Demek oluyor ki **Questions** ya da **Sorular** veri türününden sadece `count()` özelliğine erişmektedir. **Exams** veya **Sınavlar** veri türüne (güncelleme ya da ekleme hariç) tüm okuma yetkilerine sahiptir.

## User

Kullanıcımız, ödeme sistemi tamamlanana kadar geçici olarak, kaydolmuş her bir kullanıcımızdır. Varsayılmış şekilde `/sinavlar` veya `/exams` erişme hakkına sahiptir.

# Backend sınav algoritması
## Sınavı Başlatma
Sınavı girişini yapıp her kaydolmuş kullanıcımız sınavını başlatabilir (Ödeme sistemi eklenene kadar). Sınavı başlatmak isteyen kullanıcımız JWT yollar `/sinav/` adresine ve Strapi kullanıcımıza kendine ait olan sınav sorularını (100-150 adet girdiği sınavda kaç adet gerekiyorsa) hazırlar, sınav sorular dizisine ekler. Hepsinin cevabı `null` veya `undefined` olur. Soruları şıkkılarla beraber geçecek. Sınavın Başlatılma komutu kullanıcımıza ilk sorusunu yollayarak bitecektir. Örn:
```json
// Response from Strapi
{
	"q_number": 1, //soru ID'si değil
	"q_text": "Soru diyor ki Strapi nedir?",
	"q_variants": 
	[
		"Wordpress",
		"Site",
		"Headless CMS",
		"API"
	],
	"user _answer": "",
}
```
Cevaplandıkça kullanıcının verdiği cevaplar işlenecek.

## Sorular Arası Gezinme
Sorular arasında geçiş yapacak kullanıcımız geçiş yapmadan önce işaretlediği cevabını ve soru numarasını göndermek için sunucumuza hazırlar. Geçiş yapabilecek yönler, sorusuna bağlı olarak ileri veya geridir: `/sinav/next` ileri ve `/sinav/prev` geri gitmeye. İleri veya geri gittiğinde sunucuya  edeceği veriler , , 

 - **POST**
 - **JWT**
 - Bulunduğu soru numarası
 - O sorunun varsa cevabı (`string` )
Örneğin:
```json
// JWT headerin Bearer Token olarak gidecektir.
{
	"q_number": 12,
	"user_answer": "dogru cevap",
}
```
Sorularının geçiş yapıldığında, daha önce verilen cevaplar olduğu gibi gelecektir (aynı soruya tekrar cevap vermemek için).  
Response olarak da:
```json
// Response from Strapi
{
	"q_number": 2, //soru ID'si değil
	"q_text": "Soru diyor ki Strapi hangi dil kullanmıyor?",
	"q_variants": 
	[
		"PHP",
		"JS",
		"CSS",
		"TS"
	],
	//kullanıcının daha önce verdiği cevap (varsa)
	"user_answer": "PHP",
	// değilse
	"user_answer": "",
}
```
 Soru geçişi esnasında sorularının cevabı değişti ise, kullanıcının sorular dizisinde saklanan cevapları da değişecektir.
## Submission (Sınavı Tamamlama)
Sınavını tamamlamak için kullanıcımız `/sinav/submit` yapıp son sorusunun da cevabını yükleyip (veya güncelleyip) başlattığı sınavı sonlandıracaktır. 
Örneğin:
```json
// JWT headerin Bearer Token olarak gidecektir.
{
	"q_number": 150,
	"user_answer": "dogru cevap",
}
```
Sumbit ettikten sonra sorular karşılaştırılıp kullanıcının o sınav denemesindeki puanı yazılacak. Veri tabanında o kullanıcının yeni sınav denemesi eklenecek. İsterse sorulmuş sorularının hepsine göz atabilir.
![Sınavın İşleyişi](https://github.com/litehacker/strapi-quiz/blob/master/frontend/S%C4%B1nav%C4%B1n%20Algoritmas%C4%B1.png)