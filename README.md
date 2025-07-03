# 个人简历项目

这是一个响应式的个人简历网页项目，所有公司、学校、证书、联系方式、项目经历均采用卡片化结构，支持为每个公司、学校和证书添加logo。

## 功能特性

- 响应式设计，支持移动端和桌面端
- 单页面应用（SPA）架构
- 所有公司、学校、证书、联系方式、项目经历均为卡片化结构（如 .job-item、.project-item、.edu-item、.cert-item、.contact-item）
- 所有图标与右侧文字的间距统一为12px
- 现代化的UI设计，卡片有阴影、圆角、悬停动画
- 平滑的页面切换与动画效果

## Logo与图标说明

### 当前使用的Logo

项目目前使用真实的公司、学校和证书logo图片：

#### 公司Logo
- 慧博云通科技股份有限公司：`job_hydsoft.jpg`
- 中通服软件科技有限公司：`job_ccssoft.jpg`
- 北京华宇信息技术有限公司：`job_thunisoft.jpg`
- 前锦网络信息技术（上海）有限公司：`job_51job.jpg`
- 绵阳市安州区文化广电新闻出版局：`job_aztv.jpg`

#### 学校Logo
- 电子科技大学：`edu_uestc.jpg`
- 西南科技大学：`edu_swust.jpg`

#### 证书Logo
- 所有计算机技术与软件专业技术资格（水平）证书：`edu_ruankao.jpg`

#### 联系方式图标
- fa-phone（电话）
- fa-envelope（邮箱）
- fa-blog（技术博客）

#### 项目经历图标
- fa-cloud、fa-code、fa-tools、fa-network-wired

> 实际显示尺寸、样式、间距等以css/style.css为准，如需调整请修改CSS文件。

### Logo样式说明

- 所有logo均为白色背景，有色边框（公司蓝色、学校绿色、证书橙色），圆角，卡片化容器
- 悬停时有缩放、旋转、阴影动画
- 尺寸以CSS为准（公司logo约36x36px，学校32x32px，证书30x30px）

### 卡片结构说明

- 工作经历、项目经历、教育经历、证书、联系方式均为卡片化结构：
  - 外层为.info类（如.job-list、.project-list、.edu-info、.cert-info、.contact-info）
  - 每条记录为.item类（如.job-item、.project-item、.edu-item、.cert-item、.contact-item）
  - 图标与右侧文字间距统一为12px
  - 卡片内外间距、阴影、圆角等以CSS为准

### Font Awesome 图标说明

本项目还使用了 Font Awesome 矢量图标，主要用于项目经历和联系方式部分：

- 项目经历：
  - fa-cloud（云计算）
  - fa-code（开发/编程）
  - fa-tools（系统配置）
  - fa-network-wired（网络规划）
- 联系方式：
  - fa-phone（电话）
  - fa-envelope（邮箱）
  - fa-blog（技术博客）

Font Awesome 图标为矢量图标，显示尺寸和间距由CSS控制。

## 文件结构

```
resume/
├── index.html          # 主页面文件
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript功能文件
├── images/
│   ├── profile.jpg     # 个人头像
│   └── logos/          # Logo图片目录
├── README.md           # 说明文档
├── PROJECT_COMPLETE.md # 项目完成总结
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者部署到Web服务器上

## 技术栈

- HTML5
- CSS3（使用Flexbox布局，所有卡片和间距以CSS为准）
- JavaScript (ES6+)
- Font Awesome 图标库

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 