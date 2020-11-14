<template>
  <div class="header">
    <i @click="changCollapse" :class="[$store.state.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
    <div>
      <span>您好~管理员</span>
      <span class="logout" @click="logout">退出登录</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { logout } from '@/request/login.js'
export default {
  methods: {
    ...mapMutations({ changCollapse: 'changCollapse' }),
    async logout () {
      let res = await logout()
        localStorage.clear()
        sessionStorage.clear()
        this.$store.commit('clearTags')
        this.$message.success('退出成功')
        this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less">
.header {
  width: 100%;
  height: 64px;
  padding: 0 18px 0 28px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  i {
    font-size: 20px;
  }
  .logout {
    margin-left: 20px;
    color: #81D3F8;
    cursor: pointer;
  }
}
</style>