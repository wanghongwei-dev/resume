# 个人简历项目

这是一个响应式的个人简历网页项目，支持为每个公司、学校和证书添加logo。

## 功能特性

- 响应式设计，支持移动端和桌面端
- 单页面应用（SPA）架构
- 为每个公司、学校、证书添加logo支持
- 现代化的UI设计
- 平滑的动画效果

## Logo使用说明

### 当前使用的Logo

项目目前使用真实的公司、学校和证书logo图片：

#### 公司Logo
- 慧博云通科技股份有限公司：`job_hydsoft.jpg`（推荐分辨率：38x38像素，实际显示：38x38）
- 中通服软件科技有限公司：`job_ccssoft.jpg`（推荐分辨率：38x38像素，实际显示：38x38）
- 北京华宇信息技术有限公司：`job_thunisoft.jpg`（推荐分辨率：38x38像素，实际显示：38x38）
- 前锦网络信息技术（上海）有限公司：`job_51job.jpg`（推荐分辨率：38x38像素，实际显示：38x38）
- 绵阳市安州区文化广电新闻出版局：`job_aztv.jpg`（推荐分辨率：38x38像素，实际显示：38x38）

#### 学校Logo
- 西南科技大学：`edu_swust.jpg`（推荐分辨率：34x34像素，实际显示：34x34）
- 电子科技大学：`edu_uestc.jpg`（推荐分辨率：34x34像素，实际显示：34x34）

#### 证书Logo
- 所有计算机技术与软件专业技术资格（水平）证书：`edu_ruankao.jpg`（推荐分辨率：32x32像素，实际显示：32x32）

#### 联系方式图标
- fa-phone（电话）：实际显示约21x21像素
- fa-envelope（邮箱）：实际显示约21x21像素
- fa-blog（技术博客）：实际显示约21x21像素

#### 项目经历图标
- fa-cloud、fa-code、fa-tools、fa-network-wired：实际显示约26x26像素

> 实际显示尺寸以css/style.css为准，如需调整请修改CSS文件。

### 如何替换为自定义Logo

1. **准备Logo图片**
   - 将公司/学校/证书的logo图片放入 `images/logos/` 目录
   - 建议使用PNG格式，尺寸建议32x32像素
   - 文件名建议使用英文，如：`company1.png`, `school1.png`, `cert1.png`

2. **修改HTML代码**
   找到对应的logo元素，将图片路径替换为新文件名：

   ```html
   <!-- 原来的代码 -->
   <div class="company-logo">
       <img src="images/logos/job_hydsoft.jpg" alt="慧博云通科技股份有限公司">
   </div>

   <!-- 替换为新的图片 -->
   <div class="company-logo">
       <img src="images/logos/job_newcompany.jpg" alt="新公司名称">
   </div>
   ```

3. **调整CSS样式**
   如果需要调整logo的显示效果，可以修改 `css/style.css` 中的相关样式：

   ```css
   .company-logo img {
       width: 100%;
       height: 100%;
       object-fit: contain;
   }
   ```

### Logo样式说明

- **公司Logo**：蓝色渐变背景，32x32像素
- **学校Logo**：绿色渐变背景，28x28像素  
- **证书Logo**：橙色渐变背景，26x26像素

所有logo都支持悬停动画效果，包括缩放和旋转。

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

Font Awesome 图标为矢量图标，显示尺寸由CSS控制，实际显示大小见下文。

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
└── README.md           # 说明文档
```

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者部署到Web服务器上

## 技术栈

- HTML5
- CSS3 (使用Flexbox和Grid布局)
- JavaScript (ES6+)
- Font Awesome 图标库

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 