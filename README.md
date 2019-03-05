# mtl-web 基于多端协议的模型驱动开发框架


基于多端协议的模型驱动开发，简称UCF-MDD，即通过UI元数据来描述页面UI的呈现效果，通过数据模型来描述页面业务交互逻辑及业务数据。一个多端协议接口将以上信息通过规范化的接口送达到前端（多端），端上再通过一套渲染引擎SDK将UI元数据描述渲染成我们需要的页面（其中肯定需要结合我们标准的基础组件和业务组件），并且，和渲染引擎一起配合的是一套对模型数据操作的SDK，能够提供给开发者达到对数据扩展操作的功能。

**mtl-web 组成：**
- 基于多端协议，结合标准组件的元数据渲染SDK
- 可扩展的数据模型操作SDK

**更多：[整体需求描述](./docs/整体需求描述.md)**


## Packages 

目前的设想：

- [@mtl/components]() 元数据中存放的组件（container类、controls类），如果tinper-bee和tinper-acs已有则复用，没有则在这里添加维护
- [@mtl/datamodel]() 数据模型层封装
- [@mtl/render-engine]() 基于UI元数据的解析渲染
- [@mtl/core]() 暂定为对以上三者的合成，以及三者的公共工具方法等。

## 快速使用


```
# 待定
```

## 基于lerna的开发和调试

> 基于lerna分包后的开发痛点：如果现在在开发module-2, 但是发现是module-1的bug, 把module-1的bug修改了, 需要发布一下到npm, 然后module-2再更新module-1的依赖。

解决方案：
```
# 你本地的package1会依赖于本地的package2，而不用担心package2没发布或者已发布的版本是过时的。
lerna add package1 –scope=package2

```

**更多参考使用：**

```
# 将模块  module-1 安装到packages下所有以 “prefix-*” 开头的目录中
lerna add module-1 packages/prefix-*

# 将 module-1 安装到 module-2
lerna add module-1 --scope=module-2

# 将 module-1 安装到 module-2的 devDependencies中
lerna add module-1 --scope=module-2 --dev

# 将 module-1 安装到所有模块（除 module-1 模块本身外）
lerna add module-1
```