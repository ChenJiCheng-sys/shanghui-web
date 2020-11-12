<template>
    <el-menu
      :default-active="onRoutes"
      background-color="#001529"
      text-color="#ccc"
      active-text-color="#fff"
      class="sidebar-el-menu left"
      unique-opened
      router
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <div v-if="!isCollapse" class="left_header">
        <div>商会后台管理系统</div>
      </div>
        <el-submenu v-for="item in menus" :index="item.index"  :key="item.index">

          <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
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
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menus: [
        {
          icon: "el-icon-s-home",
          index: "/home",
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
    handleOpen () {},
    handleClose () {}
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
    }
  }
};
</script>

<style lang="less">
.left {
  height: 100vh;
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
</style>