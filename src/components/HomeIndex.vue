<template>
  <div class="home_index">
    <div class="home_one">
      <div class="sales">
        <div class="title">今日销售额</div>
        <div class="num">126,560</div>
        <div class="top_line">日均销售额&nbsp;￥126,560</div>
        <div class="top_line">昨日销售额&nbsp;￥126,560</div>
        <div class="top_line">本周销售额&nbsp;￥126,560</div>
      </div>
      <div class="member_add">
        <div class="title">今日新增会员</div>
        <div class="num">12</div>
      </div>
      <div class="member_atv">
        <div class="title">今日会员活跃度</div>
        <div class="num">1,560</div>
      </div>
      <div class="devote">
        <div class="title">今日贡献度</div>
        <div class="num">126</div></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .home_index {
    width: 100%;
    height: 100%;
    padding: 26px;
    box-sizing: border-box;
    .home_one {
      display: flex;
      justify-content: space-between;
      .sales, .member_add, .member_atv, .devote {
        width: 266px;
        height: 198px;
        border-radius: 2px;
        background-color: #fff;
        padding: 0 24px;
        box-sizing: border-box;
        .title {
          height: 46px;
          color: rgba(0, 0, 0, .65);
          line-height: 62px;
        }
        .num {
          font-size: 30px;
        }
      }
    }
  }

  .top_line {
    height: 35px;
    line-height: 35px;
    color: rgba(0, 0, 0, .65);
    border-top: 1px solid #ccc;
  }
</style>