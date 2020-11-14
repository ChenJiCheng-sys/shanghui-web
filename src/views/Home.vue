<template>
  <div class="home">
    <Left />
    <div
      :style="`position: absolute; top: 0; right: 0; bottom: 0; left: ${
        $store.state.isCollapse ? '64px' : '256px'
      }; transition: all 300ms ease-in-out; overflow: hidden;`"
    >
      <MyHeader />
      <Tag v-if="$route.path !== '/'" />

      <div class="home_contetn">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
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
    Tag,
  },
};
</script>

<style lang='less'>
.home {
  background-color: #f0f2f5;
  .home_contetn {
    width: auto;
    height: 100%;
    height: ~"calc(100vh - 94px)";
    padding: 16px;
    box-sizing: border-box;
  }
}
</style>
