<script lang="ts" setup>
interface IWorkItem {
  id: number;
  title: string;
  link: string;
  image: string; // Filename in assets/images/works/
  description: string;
  awards?: {
    text: string;
    link: string;
  };
  proof?: {
    text: string;
    link: string;
  };
}

const works: IWorkItem[] = [
  { id: 1, title: 'Trusty', link: 'http://www.trusty.com.tw/', image: '019.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 2, title: 'Bikonnect', link: 'https://bikonnect.com/', image: '020.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 3, title: '單車時代', link: 'http://cyclingtime.com/', image: '021.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 4, title: '單車時代 - Bike Show', link: 'http://bikeshow.cyclingtime.com/bikeshow_2020/index.php/tw', image: '022.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 5, title: '中華航空-跟著小花趣旅行', link: 'https://crewblog.china-airlines.com/', image: '001.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 6, title: '森鉅科技材料股份有限公司', link: 'http://www.xxentria-tech.com/index.php/zh-TW', image: '002.jpg', description: '參與項目：RWD + HTML + CSS + Javascript', 
    awards: { text: '2018 CSS DESIGN AWARDS UX DESIGN', link: 'https://www.cssdesignawards.com/sites/xxentria-tech/32707' },
    proof: { text: '文件網址', link: 'https://drive.google.com/file/d/1P6RsZI2YrwEbm6fmF0_JOhNrEA4ct2nK/view?usp=sharing' }
  },
  { id: 7, title: 'VM', link: 'demo/vm/', image: '024.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 8, title: '台灣數位光訊數位科技集團', link: 'demo/tocp/', image: '023.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 9, title: 'Leaderex', link: 'https://www.leaderex.com.tw/', image: '017.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 10, title: '光光盒餐', link: 'demo/guangguang/', image: '004.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 11, title: '顶范 DING FAN', link: 'demo/dingfan/', image: '018.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 12, title: 'JIA YE HSING CO., LTD.', link: 'demo/jiayehsing/', image: '003.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 13, title: 'HDZ 社交平台行銷系統', link: 'https://www.hdzbulk.com/', image: '013.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 14, title: 'UNIND', link: 'http://www.unindasia.com/', image: '006.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 15, title: '米提爾牛軋糖', link: 'https://www.mitir.com.tw/', image: '007.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 16, title: 'TOP WELL Tools Industrial Co.,Ltd', link: 'http://www.topwell-tools.com/', image: '008.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 17, title: '瑞助營造‧REIJU', link: 'demo/reiju', image: '009.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 18, title: 'GEPT Kids 小學英檢網', link: 'https://www.geptkids.org.tw/', image: '010.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 19, title: '舒康雞 HOLSEM', link: 'https://www.holsem-foods.com/', image: '011.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 20, title: 'WHIRLPOWER', link: 'http://www.whirlpower.com.tw/', image: '012.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 21, title: '展大國際股份有限公司', link: 'http://www.piovision.com/', image: '014.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 22, title: '信星集團 KINGMAKER', link: 'http://www.kingmaker-footwear.com/zh-Hant', image: '015.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 23, title: 'ALPHABET', link: 'http://www.alphabet.com.tw/index.php', image: '016.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
  { id: 24, title: '向上國際科技股份有限公司', link: 'demo/xsg/', image: '005.jpg', description: '參與項目：RWD + HTML + CSS + Javascript' },
];

const getImageUrl = (name: string) => {
  return new URL(`../assets/images/works/${name}`, import.meta.url).href;
};
</script>

<template>
  <section class="works" data-anchor="works" id="works">
    <div class="works_items">
      <div v-for="work in works" :key="work.id" class="item">
        <img :src="getImageUrl(work.image)" :alt="work.title">
        <div class="text">
          <a class="link" :href="work.link" target="_blank">
            <i class="icon_link"></i>
          </a>
          <h2>[&nbsp;<a :href="work.link" target="_blank">{{ work.title }}</a>&nbsp;]</h2>
          <p>
            {{ work.description }}
            <template v-if="work.awards">
              <br>得獎：<a :href="work.awards.link" target="_blank">{{ work.awards.text }}</a>
            </template>
            <template v-if="work.proof">
              <br>證明文件: <a :href="work.proof.link" target="_blank">文件網址</a>
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.works {
  .works_items {
    
    // Clearfix
    &::after, &::before {
      content: "";
      clear: both;
      display: block;
    }

    .item {
      position: relative;
      overflow: hidden;
      width: 100%; // Default mobile

      img {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        max-width: inherit;
      }

      .text {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0.5em;
        box-sizing: border-box;
        background-color: rgba(126, 206, 244, 0.85);
        text-align: center;
        color: #fff;
        opacity: 0.5;
        transform: translateY(100%);
        transition: all 0.5s ease-in-out;

        &::before {
          content: "";
          position: absolute;
          top: 0.5em;
          left: 0.5em;
          z-index: 0;
          display: block;
          width: calc(100% - 1em);
          height: calc(100% - 1em);
          border: 1px solid #fff;
          box-sizing: border-box;
        }

        a.link {
          position: relative;
          z-index: 1;
          display: block;
          width: 60px;
          height: 60px;
          margin: 0 auto 0.5em;

          .icon_link {
            transform: scale(0.6);
            transform-origin: left top;
          }

          &:hover .icon_link {
            transform: scale(0.6) translateY(-15px);
          }
        }

        h2 {
          position: relative;
          z-index: 1;
          margin: 0;
          font-size: 1.125em;
          font-weight: 500;
          a {
             color: $link-color;
             &:hover { color: $link-hover; }
          }
        }

        p {
          position: relative;
          z-index: 1;
          margin: 0;
          font-size: 0.875em;
           a {
             color: $link-color;
             &:hover { color: $link-hover; }
          }
        }
      }

      &:hover .text {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  // Media Queries
  @media (min-width: 480px) {
    .works_items .item .text {
      a.link {
        width: 80px;
        height: 80px;
        margin-bottom: 1rem;
        
        .icon_link {
           transform: scale(0.8);
        }
        
        &:hover .icon_link {
           transform: scale(0.8) translateY(-25px);
        }
      }
      h2 { font-size: 1.25em; }
      p { font-size: 1em; }
    }
  }

  @media (min-width: 768px) {
    .works_items .item {
      width: 50%;
      float: left;
      
      &:nth-child(odd) {
        margin-right: -100%; // Interesting grid layout tech from original CSS
        clear: both;
        margin-left: 0;
      }
      &:nth-child(2n + 2) {
        margin-left: 50%;
        margin-right: -100%;
        clear: none;
      }
    }
  }

  @media (min-width: 1280px) {
    .works_items .item {
      width: 33.3333333333%;
      float: left;

      &:nth-child(odd) {
         margin-right: 0; clear: none; margin-left: 0; // Reset
      }
      &:nth-child(2n + 2) {
         margin-left: 0; margin-right: 0; // Reset
      }

      &:nth-child(3n + 1) {
        margin-right: -100%;
        clear: both;
        margin-left: 0;
      }
      &:nth-child(3n + 2) {
        margin-left: 33.3333333333%;
        margin-right: -100%;
        clear: none;
      }
      &:nth-child(3n + 3) {
        margin-left: 66.6666666667%;
        margin-right: -100%;
        clear: none;
      }
    }
  }

  @media (min-width: 1600px) {
    .works_items .item .text a.link {
      width: 100px;
      height: 100px;
      .icon_link { transform: scale(1); }
      &:hover .icon_link { transform: scale(1) translateY(-25px); }
    }
  }
}

.icon_link {
  background-image: url(@/assets/images/sprite.png);
  background-position: 0 0;
  width: 100px;
  height: 100px;
  display: block;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(@/assets/images/sprite-2x.png);
      background-size: 140px 100px;
   }
}
</style>
