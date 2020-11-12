<template>
  <div class="header">
    <i :class="[icon]"></i>
    <div>
      <span>您好~管理员</span>
      <span class="logout">退出登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: 'el-icon-s-fold'
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