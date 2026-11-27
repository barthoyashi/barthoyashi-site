# barthoyashi-site

Barthoyashi 企业展示站（纯静态，无构建步骤）

## 结构

```
index.html       首页
products.html    产品与代工
about.html       关于工厂
contact.html     联系我们
404.html         错误页
assets/style.css 全站样式
assets/app.js    语言切换（?lang=en）+ 年份
images/          hero.jpg / craft.jpg
sitemap.xml      hreflang 双语
robots.txt
```

## 本地预览

直接双击 index.html，或：

```bash
python -m http.server 8080
```

## 部署

**方式一（手动）**

```bash
wrangler pages deploy . --project-name=barthoyashi
```

**方式二（自动，推荐）**

`git push origin main` 后由 `.github/workflows/deploy.yml` 自动部署。

需要仓库 Secrets：`CLOUDFLARE_API_TOKEN`（Pages:Edit）、`CLOUDFLARE_ACCOUNT_ID`。

## 注意

- 站内链接不带 `.html`，Cloudflare Pages 会自动把 `xxx.html` 308 到 `xxx`
- 双语靠 `?lang=en` 参数 + localStorage，`hreflang` 已同步
- 图片为占位素材（AI 生成），上线稳定后建议替换为实拍工厂照
