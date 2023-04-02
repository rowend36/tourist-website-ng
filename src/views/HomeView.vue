<script setup lang="ts">
</script>

<template>
  <main>
    <div class="fullscreen">
      <h1 class="site-title">NIGERIA</h1>
      <span class="site-title-caption">The African Home of Cultural Diversity</span>
    </div>
    <div class="section">
      <h2>EXPLORING NIGERIA'S BEAUTY</h2>
      Nigeria, often referred to as the "Giant of Africa", is the most populous country on the continent, with a
      population of over 200 million people.
      It is a country with a rich history and culture, breathtaking natural wonders, and bustling cities that attract
      visitors from all over the world.
      <div class="img-section">
        <div class="img-section-img">
          <h3>

            500 indigenous languages
          </h3>
        </div>
        <div class="img-section-text">
          <p>
            English is the official language of Nigeria. But amongst people in the rural areas, Hausa, Yoruba, Igbo,
            Fulfulde, Ibibio, Kanuri, and Tiv. Other than these, there are other 500 indigenous languages in Nigeria,
            which
            makes its ethnic groups distinct.
          </p>
        </div>
      </div>
      <div class="img-section">
        <div class="img-section-img">
          <h3>

            250 ethnic groups
          </h3>
        </div>
        <div class="img-section-text">
          <p>
            Home to over 250 ethnic groups, Nigeria is the most diverse country in Africa. Ethnicity, language, culture,
            and religion distinctly vary in this country. The largest of these groups are the Hausa-Fulani, Yoruba, and
            Igbo.
          </p>
        </div>
      </div>
      <div class="img-section">
        <div class="img-section-img">
          <h3>
            Largest producer of oil and gas in Africa
          </h3>
        </div>
        <div class="img-section-text">
          <p>
            Nigeria produces an average of 2.5 million barrels of crude oil each day contributing massively to its economy
            which is growing strong and projected to land on the world’s top 10 economies by 2050.
          </p>
        </div>
      </div>

      <div class="img-section">
        <div class="img-section-img">
          <h3>
            Home of a massive movie industry
          </h3>
        </div>
        <div class="img-section-text">
          <p>
            The country's film industry, known as Nollywood, is one of the largest film producers in the world, second
            only
            to India's Bollywood.
          </p>
        </div>
      </div>
      <h3>History And Culture</h3>
      <p>Nigeria's history dates back to ancient times, with archaeological evidence suggesting
        that the Nok culture existed as far back as 1,000 BC. Over the centuries, the country has been shaped by various
        empires and kingdoms, including the Benin Empire, the Sokoto Caliphate, and the Oyo Empire. These empires played a
        crucial role in the development of Nigeria's rich culture, which is evident in the country's art, music, and
        literature.</p>
      <p> Nigeria's diverse population is made up of over 250 ethnic groups, each with its own unique customs,
        traditions, and languages. The three largest ethnic groups are the Hausa-Fulani, Yoruba, and Igbo, and each has
        its
        own distinctive culture. For instance, the Hausa-Fulani are known for their colorful clothing and elaborate
        weddings, while the Yoruba are famous for their intricate beadwork and music.</p>
      <p> One of the best ways to experience
        Nigeria's culture is through its festivals. The country has a wide range of festivals, from the colorful
        Osun-Osogbo
        Festival in Osun State, which celebrates the river goddess Osun, to the Durbar Festival in Kano State, which
        features a colorful parade of horsemen in traditional attire.</p>
      <p> Nigeria's art scene is also thriving, with artists
        like Ben Enwonwu, Bruce Onobrakpeya, and Njideka Akunyili Crosby gaining international recognition. Visitors can
        explore the country's art at galleries such as the Nike Art Gallery in Lagos and the Omenka Gallery in Ikoyi.
        Overall, Nigeria's history and culture are diverse, vibrant, and rich. Visitors can immerse themselves in the
        country's customs and traditions through its festivals, art, music, and cuisine, which we'll explore later on.</p>
    </div>
  </main>
</template>
<style scoped>
.fullscreen {
  width: 100%;
  height: auto;
  background: url("../assets/nupo-deyon-daniel-67ruAEYmp4c-unsplash.jpg");
  background-color: #8FBDD5;
  background-size: cover, auto;
  background-attachment: fixed;
  min-height: 50vw;
  padding: 32px 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.site-title {
  font-size: calc(9.5vw + 25px);
  color: white;
  text-align: center;
  margin-top: 25vh;
  letter-spacing: 0.05em;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(128, 128, 128, 0.5);
}

.site-title-caption {
  font-size: 2rem;
  text-align: center;
  background: rgba(0, 20, 50, 0.35);
  color: white;
  font-weight: lighter;
  letter-spacing: 0.025em;
  padding: 0 1em;
}

h2 {
  color: rgba(0, 20, 50, 0.4);
  font-weight: bold;
  font-size: 4.75rem;
  margin: 0.25em 0;
}

.section {
  padding: 64px 128px;
  font-size: 1.375rem;
  background: rgba(0, 20, 50, 0.02);
  color: rgba(0, 20, 50, 0.85);
  max-width: 1440px;
  margin: auto;
}

.img-section {
  padding: 32px;
  margin: 64px 0;
}

p {
  text-rendering: optimizeLegibility;
}

.img-section::after {
  display: block;
  clear: both;
  content: "";
}

.img-section-text {
  width: 50%;
  float: right;
  min-width: 300px;
  padding: 64px 0;
}

.img-section-img {
  float: right;
  padding: 32px 64px;
  border-radius: 32px;
  background: white;
  box-shadow: rgba(112, 128, 175, 0.2) 0 -16px 24px 0;
  margin-left: 5%;
  margin-right: 5%;
  width: 40%;
  min-width: 240px;
}

.img-section-img>h3 {
  font-size: 2.25rem;
  color: rgba(0, 30, 70, 0.75);
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 12rem;
  display: flex;
  text-transform: capitalize;
}

.img-section:nth-of-type(even)>.img-section-img {
  float: left;
}

.img-section:nth-of-type(odd)>.img-section-text {
  float: left;
}

@media screen and (max-width: 960px) {
  .section {
    padding: 64px 64px;
  }

  .img-section-img>h3 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 600px) {
  .site-title-caption {
    font-size: 1.375rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  .section {
    padding: 32px 16px;
  }

  .img-section {
    padding: 32px 0;
  }

  .img-section-img {
    width: 90%;
    padding: 32px;
  }

  .img-section.img-section>.img-section-text {
    width: auto;
    min-width: auto;
    float: none;
  }

  .img-section.img-section>.img-section-img {
    float: none;
  }

  .img-section-img>h3 {
    font-size: 1.75rem;
  }
}
</style>
