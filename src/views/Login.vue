<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">商会后台管理系统</div>
      <el-form
        :model="params"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="phone">
          <el-input v-model.trim="params.phone" placeholder="手机号码">
            <el-button slot="prepend" icon="el-icon-phone"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model.trim="params.password"
            @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips: 请输入手机号码和密码</p>
      </el-form>
    </div>
  </div>
</template>

<script>
// 商会ID
// const cid = "1324964920882343938";
import { login } from '@/request/login'

export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号码不能为空"));
      }
      if (!/^1\d{10}$/.test(value)) {
        return callback(new Error("请输入正确的手机号码"));
      }
			callback()
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }

      if (value.length < 6) {
        return callback(new Error("密码长度不能小于6位"));
			}
			callback()
    }
    return {
      params: {
        // cid,
        phone: "17688987652",
        password: "123456",
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.login.validate(async valid => {
        if (valid) {
					let {code, data, msg } = await login(this.params)
					if (code === 200) {
						this.$message.success('登录成功')
						let { token, menus, name, userId } = data
						localStorage.setItem('token', token)
						localStorage.setItem('menus', menus)
						localStorage.setItem('name', name)
						localStorage.setItem('userId', userId)
						this.$router.push('/')
					} else {
						this.$message.error(msg)
					}
        }
      })
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/login-bg.jpg");
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>