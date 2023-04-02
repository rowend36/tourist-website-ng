<script setup lang="ts">
</script>

<template>
  <main>
    <div class="fullscreen">
      <h1 class="site-title">NIGERIA</h1>
      <span class="site-title-caption">The African Home of Cultural Diversity</span>
    </div>
    <div class="section">
      <h2>WELCOME TO NIGERIA</h2>
      Nigeria is a democratic country located at the heart of Africa. It is home to over 200 million people making it the
      most populous country in Africa and the seventh most populous country in Africa. Despite this, Nigeria is always
      thrilled to welcome tourists who want to visit Nigeria and appreciate her wonderful heritage.
      <div class="img-section">
        <div class="img-section-img">
          <h3>

            500 indigenous languages
          </h3>
        </div>
        <div class="img-section-text">
          English is the official language of Nigeria. But amongst people in the rural areas, Hausa, Yoruba, Igbo,
          Fulfulde, Ibibio, Kanuri, and Tiv. Other than these, there are other 500 indigenous languages in Nigeria, which
          makes its ethnic groups distinct.
        </div>
      </div>
      <div class="img-section">
        <div class="img-section-img">
          <h3>

            250 ethnic groups
          </h3>
        </div>
        <div class="img-section-text">
          Home to over 250 ethnic groups, Nigeria is the most diverse country in Africa. Ethnicity, language, culture,
          and religion distinctly vary in this country. The largest of these groups are the Hausa-Fulani, Yoruba, and
          Igbo.
        </div>
      </div>
      <div class="img-section">
        <div class="img-section-img">
          <h3>

            Largest producer of oil and gas in Africa
          </h3>
        </div>
        <div class="img-section-text">
          Nigeria produces an average of 2.5 million barrels of crude oil each day contributing massively to its economy
          which is growing strong and projected to land on the world’s top 10 economies by 2050.
        </div>
      </div>

      <div class="img-section">
        <div class="img-section-img">
          <h3>
            Home of a massive movie industry
          </h3>
        </div>
        <div class="img-section-text">
          The country's film industry, known as Nollywood, is one of the largest film producers in the world, second
          only
          to India's Bollywood.
        </div>
      </div>
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
  font-size: calc(7.5vw + 25px);
  color: white;
  text-align: center;
  margin-top: 25vh;
  letter-spacing: 0.1em;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(128, 128, 128, 0.5);
}

.site-title-caption {
  font-size: 2rem;
  text-align: center;
  background: rgba(0, 20, 50, 0.35);
  color: white;
  font-weight: lighter;
  letter-spacing: 0.05em;
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
}

.img-section {
  padding: 32px;
  margin: 64px 0;
}

.img-section::after {
  display: block;
  clear: both;
  content: "";
}

.img-section-text {
  width: 50%;
  float: left;
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
}

.img-section-img>h3 {
  font-size: 2.5rem;
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

@media screen and (max-width: 600px) {
  .site-title-caption {
    font-size: 1.375rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  .section {
    padding: 64px 16px;
  }

  .img-section {
    padding: 32px 0;
  }

  .img-section-img {
    width: 90%;
    float: left;
    padding: 32px;
  }

  .img-section-img>h3 {
    font-size: 1.75rem;
  }
}
</style>
