<template>
  <div class="commerce">
    <div class="search">
      <div>
        姓名：<el-input
          v-model="form.keyword"
          size="mini"
        ></el-input>
      </div>
      <div>
        手机号码：<el-input
          v-model="form.coc_user"
          size="mini"
        ></el-input>
      </div>
      <div>
        会员到期时间：
        <el-date-picker
        size="mini"
          v-model="form.startTime"
          type="date"
          placeholder="选择日期"
          style="margin-right: 0;"
          format="yyyy-MM-dd hh:mm:ss"
          value-format="yyyy-MM-dd 00:00:00"
        >
        </el-date-picker>
        至
        <el-date-picker
        size="mini"
          v-model="form.endTime"
          type="date"
          placeholder="选择日期"
          style="margin-right: 0;"
          format="yyyy-MM-dd hh:mm:ss"
          value-format="yyyy-MM-dd 00:00:00"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary" size="mini" @click="search">查询</el-button>
      <el-button plain size="mini" @click="reset">重置</el-button>
    </div>
    <div class="redi_wrapper">
      <div class="redi">
        <div @click="handleSoon">即将到期会员</div>
        <div @click="handleAlready">已过期会员</div>
      </div>
      <div class="redi">
        <div>批量导出</div>
        <div>批量导入</div>
      </div>
    </div>

    <el-table style="width: 100%" :data="tableData" border>
      <el-table-column label="序号" type="index" width="50px">
      </el-table-column>
      <el-table-column label="头像" prop="name"> </el-table-column>
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="gender"> </el-table-column>
      <el-table-column label="公司" prop="companyName"> </el-table-column>
      <el-table-column label="职位" prop="enterpriseIdentity">
      </el-table-column>
      <el-table-column label="手机号码" prop="phone"> </el-table-column>
      <el-table-column label="会员到期时间" prop="expireTime">
      </el-table-column>
      <el-table-column label="状态" prop="status">
        <template slot-scope="scope">
          {{ scope.row.status | statusFilter }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <router-link :to="`/member/detail/${scope.row.userId}`">详情</router-link>
        <router-link>提醒缴纳</router-link>
        <router-link>禁用</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMemberList } from "@/request/member.js";
export default {
  data() {
    return {
      form: {
        keyword: "",
        coc_user: "",
        startTime: "",
        endTime: "",
        numberType: 2,
        expireType: ''
      },
      tableData: [],
      memberState: "",
    };
  },
  methods: {
    handleSoon () {
      this.form.expireType = 1
      this.__getMemberList()
    },
    handleAlready () {
      this.form.expireType = 2
      this.__getMemberList()
    },
    reset() {
      this.form.keyword = "";
      this.form.coc_user = "";
      this.form.startTime = "";
      this.form.endTime = "";
      this.form.expireType = "";
      this.__getMemberList()
    },
    async __getMemberList() {
      let { data } = await getMemberList(this.form);
      this.tableData = data.list
    },
    search () {
      this.__getMemberList()
    }
  },
  filters: {
    statusFilter(v) {
      switch (v) {
        case 0: return '停用'
          break
        case 1: return '正常'
          break
        case 0: return '已过期'
          break
        default: return ''
      }
    },
  },
  created() {
    this.__getMemberList()
  },
};
</script>

<style lang="less" scoped>
.commerce {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;
  .search {
    display: flex;
    align-items: center;
    .el-input {
      margin-right: 20px;
      width: 150px;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    .el-button {
      width: 100px;
      margin: 10px;
    }
  }
  .redi_wrapper {
    display: flex;
    justify-content: space-between;
    border: 1px solid #EBEEF5;
    border-bottom: none;
    .redi {
      width: 200px;
      height: 30px;
      display: flex;
      div {
        width: 100px;
        cursor: pointer;
        border: 1px solid #DCDFE6;
        color: #0099FF;
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>