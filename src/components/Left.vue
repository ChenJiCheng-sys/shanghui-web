<template>
    <el-menu
      :default-active="onRoutes"
      background-color="#001529"
      text-color="#ccc"
      active-text-color="#fff"
      class="el-menu-vertical-demo left"
      unique-opened
      router
      @select="selectMenu"
      :collapse="$store.state.isCollapse"
    >
      <div v-if="!$store.state.isCollapse" class="left_header">
        <div>商会后台管理系统</div>
      </div>
      <template v-for="item in menus">
        <el-submenu v-if="item.subs" :index="item.index" :key="item.index">

          <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
          </template>

          <template v-for="itemOne in item.subs">
            <template v-if="itemOne.subs">
              <el-submenu :key="itemOne.index" :index="itemOne.index">
                <span slot="title">{{itemOne.title}}</span>
                <el-menu-item v-for="itemTwo in itemOne.subs" :key="itemTwo.index" :index="itemTwo.index">{{itemTwo.title}}</el-menu-item>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :key="itemOne.index" :index="itemOne.index">{{itemOne.title}}</el-menu-item>
            </template>
          </template>
        </el-submenu>
        <el-menu-item v-else :key="item.index" :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      menus: [
        {
          icon: "el-icon-s-home",
          index: "/",
          title: "首页",
        },
        {
          icon: "el-icon-s-home",
          index: "/conference",
          title: "会务管理",
          subs: [
            {
              icon: "el-icon-s-home",
              index: "dashboard",
              title: "活动会议记录",
                subs: [
                  {
                    icon: "el-icon-s-home",
                    index: "dashboard",
                    title: "活动记录详情",
                  }
                ]
            }
          ]
        },
        {
          icon: "el-icon-s-home",
          index: "/publish",
          title: "发布中心",
        },
        {
          icon: "el-icon-s-home",
          index: "/approval",
          title: "审批中心",
        },
        {
          icon: "el-icon-s-home",
          index: "/financial",
          title: "财务明细",
        },
        {
          icon: "el-icon-s-home",
          index: "/member",
          title: "人员管理",
          subs: [
            {
              icon: "el-icon-s-home",
              index: "/member/commerce",
              title: "商会会员",
            },
            {
              icon: "el-icon-s-home",
              index: "/member/trade",
              title: "工会会员",
            },
            {
              icon: "el-icon-s-home",
              index: "/member/inner",
              title: "商会内部成员",
            },
            {
              icon: "el-icon-s-home",
              index: "/member/detail",
              title: "详情信息",
            },
          ]
        },
        {
          icon: "el-icon-s-home",
          index: "/system",
          title: "系统管理",
        }
      ]
    }
  },
  methods: {
    selectMenu (index, indexPath) {
      if (index === '/') return
      if (this.$store.state.tags.some(v => v.index === index)) return
      let list = this.menus
      let temp
      for (let i = 0; i <= indexPath.length - 1; i++) {
        temp = list.find(v => indexPath[i] === v.index)
        if (temp.subs && temp.subs.length > 0) {
          list = temp.subs
        }
      }
      this.addItem(temp)
    },
    ...mapMutations({addItem: 'addItem'})
  },
  computed: {
    onRoutes() {
      return this.$route.path
    }
  }
};
</script>

<style lang="less">
.left {
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .left_header {
    width: 256px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00284d;
    div {
      width: 139px;
      height: 32px;
      border-radius: 8px;
      line-height: 32px;
      text-align: center;
      background-color: #7f7f7f;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
}
</style>