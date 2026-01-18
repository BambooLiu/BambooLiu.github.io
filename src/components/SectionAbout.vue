<script lang="ts" setup>
  // Static content, no script logic needed for now
</script>

<template>
  <section class="about" data-anchor="about" id="about">
    <div class="about_main">
      <div class="pic">
        <img class="imgA" src="@/assets/images/img_about01.jpg" alt="About Me 1" />
        <img class="imgB" src="@/assets/images/img_about02.jpg" alt="About Me 2" />
      </div>
      <div class="content">
        <h1 class="title">
          禎竹
          <i class="icon_dot"></i>
          <span class="en">Bamboo</span>
        </h1>
        <ul class="about_list">
          <li>
            <h2>[ 學歷 ]</h2>
            <p>國立臺中科技大學多媒體設計系畢業</p>
          </li>
          <li>
            <h2>[ 經歷 ]</h2>
            <p>
              硬核科技有限公司 網頁前端工程師 1年7個月 仍在職
              <br />
              優聘資訊科技有限公司 網頁前端工程師 10個月
              <br />
              海頓科技有限公司 網頁前端工程師 1年5個月
              <br />
              威庭科技有限公司 網頁前端工程師 近6年
              <br />
              嵐宇科技有限公司 網頁設計助理 近1年
            </p>
          </li>
          <li>
            <h2>[ 技能 ]</h2>
            <p>
              HTML - 會使用 Pug 加快撰寫速度。
              <br />
              CSS - RWD 響應式網頁樣式撰寫、使用 Scss 加快撰寫速度。
              <br />
              Javascript - 撰寫與善用 Plugin 製作效果。
              <br />
              Git - 使用Sourcetree、GitHub進行專案版本控管。
              <br />
              前端框架 - 使用 Vue.js 或 Nuxt.js 進行專案前端的開發。
              <br />
              串接資料 -
              會用API、WebSocket與後端串接資料，寫底層處理各階段的事件，並讓協作者方便運用。
            </p>
          </li>
          <li>
            <h2>[ 聯繫 ]</h2>
            <p><a href="mailto:qqopp45@gmail.com">qqopp45@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/scss/variables' as *;

  .about {
    padding: 1.5em 1em;
    box-sizing: border-box;

    .about_main {
      max-width: 430px;
      padding: 0.8em;
      margin: 0 auto;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.4);

      .pic {
        position: relative;
        max-width: 400px;
        height: 250px;
        margin: 0 auto 1em;
        overflow: hidden;

        @media (min-width: 480px) {
          height: 350px;
        }

        img {
          &.imgA {
            display: block;
          }
          &.imgB {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
        }

        &:hover img.imgB {
          opacity: 1;
        }
      }

      .content {
        box-sizing: border-box;

        h1.title {
          margin-top: 0;
          margin-bottom: 1rem;
          color: $secondary;
          font-size: 2em;
          font-weight: 400;
          line-height: 1.2;

          .en {
            font-family: $font-family-script;
            font-weight: 700;
          }
        }

        .about_list {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            margin-bottom: 0.8em;
            &:last-child {
              margin-bottom: 0;
            }
          }

          h2 {
            margin: 0;
            color: $primary;
            font-size: 1.25em;
            font-weight: 400;
          }

          p {
            margin: 0;
            color: $text;
          }

          a {
            color: $text;
            &:hover {
              color: $secondary;
            }
          }
        }
      }
    }

    // Responsive logic migrated from CSS
    @media (min-width: 768px) {
      padding: 4em 1em;

      .about_main {
        display: flex;
        align-items: flex-start;
        max-width: 1024px;
        padding: 1em;

        .pic {
          flex: 1;
          height: auto;
          margin-bottom: 0;
        }

        .content {
          flex: 1;
          margin-left: 1.5em;
        }
      }
    }

    @media (min-width: 1024px) {
      .about_main {
        padding: 0;
        align-items: center;

        .content {
          margin-left: 0;
          padding: 1.5em;

          h1.title {
            font-size: 2.25em;
          }

          .about_list {
            li {
              display: flex;
            }
            h2 {
              width: 80px;
            }
            p {
              flex: 1;
              line-height: 32px;
            }
          }
        }
      }
    }
  }

  // Icon dot needs sprite logic
  .icon_dot {
    background-image: url(@/assets/images/sprite.png);
    background-position: -100px -40px;
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(@/assets/images/sprite-2x.png);
      background-size: 140px 100px;
    }
  }
</style>
