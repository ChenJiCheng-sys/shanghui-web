<template>
  <div class="home">
    <Left />
    <div style="flex: 1;">
      <MyHeader />
      <Tag />
      <div class="home_contetn">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import Left from "@/components/Left.vue";
import HomeIndex from "@/components/HomeIndex.vue";
import Tag from "@/components/Tag.vue";
export default {
  components: {
    MyHeader,
    Left,
    HomeIndex,
    Tag
  }
};
</script>

<style lang='less'>
  .home {
    display: flex;
    .home_contetn {
      width: 100%;
      height: ~'calc(100vh - 94px)';
      padding: 20px;
      box-sizing: border-box;
      background-color: #f0f2f5;
    }
  }
</style>
