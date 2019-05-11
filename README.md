# 基于ColorUI的自定义封装抽屉组件

> 从优秀的开源小程序UI库[ColorUI](https://github.com/weilanwl/ColorUI)了解到了全局抽屉的使用，但是作者并没有封装成组件，使用起来不太方便，在社区中确真有大佬将抽屉封装成了组件[https://www.yuque.com/colorui/colorui/pl00zk](https://www.yuque.com/colorui/colorui/pl00zk),将组件迁移到本人的小程序后，就个人来说有些诟病，如下：
> - 导航栏有多个tab栏目不太适应（自定义导航栏空间本来就小，硬生生的挤进scroll-view）  
> - 在个人需求中在主页存在多个swiper-view以及swiper-item必定会牵扯到页面移动，这样顺带把抽屉拉出来了  

基于大佬的组件做了如下自定义修正：  
- 去掉多个tab栏，换成显示title的slot
- 约定使用slot而不是传值（删除一些无用代码）
- 添加允许和禁止抽屉的外部属性传值（个人需要，也是最重要的一点）

代码片段：[https://developers.weixin.qq.com/s/DfrFyhmL7O8k](https://developers.weixin.qq.com/s/DfrFyhmL7O8k)

## 组件属性
| 属性 | 类型 | 说明 |
:-:|:-:|:-:
|drawerClass|Sring|抽屉视图自定义样式|
|drawerBarClass|Sring|标题栏自定义样式|
|canuse|Boolean|是否允许右滑抽屉出现|

## 插槽slot:  
```

  <view  slot="icon" class='text-white icon-list' ></view>

  <text slot="drawerTitle">自定义封装ColorUI抽屉组件</text>
  
  <text slot="drawerSubTitle">by 10ngui</text>
  
  <text slot="title">自定义</text>
  
  <view  slot="avatarUrl" class='response' style='margin-top:100rpx'>
    <open-data type="userAvatarUrl"></open-data>
  </view>
  
  <view slot="menu" wx:for="{{drawerMenu}}" class="cu-item arrow" wx:key>
    <view class='content' url='{{item.url}}' hover-class='none' bindtap=''>
      <text class='{{item.icon}} text-green'></text>
      <text class='text-grey'>slot {{item.title}}</text>
    </view>
  </view>

  <!-- 主页内容 -->
  <view slot="content">
  <button class='margin' bindtap='banuse'>模拟禁止抽屉右滑出来</button>
    <button class='margin' bindtap='allowuse'>模拟允许抽屉右滑出来</button>
  </view>
```

## 效果：
![gif](./gif/1.gif)