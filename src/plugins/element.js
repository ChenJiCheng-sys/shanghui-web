import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Menu, MenuItem, Submenu } from 'element-ui'

Vue.prototype.$message = Message
Vue.use(Button, Form, FormItem, Input, Menu, MenuItem, Submenu)
