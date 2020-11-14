<template>
  <div class="tags" v-if="true">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in $store.state.tags"
        :class="{ active: isActive(item.index) }"
        :key="index"
      >
        <router-link :to="item.index" class="tags-li-title">
          {{ item.title }}
        </router-link>
        <span class="tags-li-icon" @click="close(index)"
          ><i class="el-icon-close"></i
        ></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
		},
		...mapMutations({close: 'close', closeAll: 'closeAll', closeOther: 'closeOther'}),
		handleTags (command) {
			if (command === 'all') {
				this.closeAll()
				this.$router.push('/')
			} else if (command === 'other') {
				this.closeOther(this.$route.fullPath)
			}
		}
  },
  computed: {
    showTags() {
      return this.$store.state.tags > 0;
    },
  },
  mounted () {
    window.onbeforeunload = function () {
      sessionStorage.setItem('tags', JSON.stringify(this.$store.state.tags))
    }.bind(this)
  }
};
</script>

<style>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
	margin-top: 10px;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>