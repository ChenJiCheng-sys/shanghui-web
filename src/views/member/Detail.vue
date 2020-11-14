<template>
  <div class="base">
    <div>
      <div class="title">基础信息</div>
      <div class="info">
        <div class="base_row">
          <span>姓名：{{detail.name}}</span>
          <span>性别：{{detail.gender}}</span>
          <span>企业身份：{{detail.enterpriseIdentity}}</span>
          <span>公司名称：{{detail.companyName}}</span>
        </div>
        <div class="base_row">
          <span>身份证号码：{{detail.idCardNumber}}</span>
          <span>手机号码：{{detail.phone}}</span>
          <span>邀请人：{{detail.inviter}}</span>
        </div>
        <div class="base_row">
          <span>常用地址：{{detail.oftenProvince}}{{detail.oftenCity}}{{detail.oftenArea}}{{detail.oftenAddress}}</span>
        </div>
        <div class="base_row">
          <span>从事行业：{{detail.business}}</span>
          <span>合作资源：{{detail.cooperationResources}}</span>
        </div>
        <div class="base_row">
          <span>婚姻状况：{{detail.maritalStatus | maritalStatus}}</span>
          <span>政治面貌：{{detail.politicsStatus | politicsStatus}}</span>
          <span>教育程度：{{detail.educationDegree}}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="title">个人历程</div>
      <div class="info info_a">
        <div>个人介绍：</div>
        <div style="flex: 1">
          <div>
            {{detail.numberBrief}}
          </div>
          <div class="info_img">
            <img
              :src="detail.name"
            />
            <img
              :src="detail.name"
            />
            <img
              :src="detail.name"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="title">公司历程</div>
      <div class="info info_a">
        <div>公司介绍：</div>
        <div style="flex: 1">
          <div>
            {{detail.companyBrief}}
          </div>
          <div class="info_img">
            <img
              :src="detail.name"
            />
            <img
              :src="detail.name"
            />
            <img
              :src="detail.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMemberDetail } from '@/request/member.js'
export default {
  data () {
    return {
      detail: null
    }
  },
  async created () {
    let res = await getMemberDetail({ userId: this.$route.params.userId })
    if (res.code = 200) {
      this.detail = res.data
    }
  },
  filters: {
    maritalStatus (v) {
      switch (v) {
        case 1: return '已婚'
          break
        case 2: return '未婚'
          break
        default: return ''
      }
    },
    politicsStatus (v) {
      switch (v) {
        case 1: return '团员'
          break
        case 2: return '党员'
          break
        case 3: return '群众'
          break
        default: return ''
      }
    }
  }
};
</script>

<style lang="less" scoped>
.base {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  .base_row {
    padding: 15px 0;
    span {
      margin-right: 50px;
    }
  }
}
.title {
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
  padding-left: 20px;
  font-weight: 700;
  box-sizing: border-box;
  background-color: #f0f2f5;
}
.info {
  overflow: hidden;
  margin: 20px 50px;
}
.info_a {
  display: flex;
}

.info_img {
  margin-top: 10px;
  img {
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }
}
</style>