# 为了兼容各种浏览器，统一重置样式库

~~~css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,/* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td /* table elements 表格元素 */ { 
    margin: 0;
    padding: 0;
}

/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
    /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
    font: 12px/1 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}
h1, h2, h3, h4, h5, h6, button, input, select, textarea {
    font-size: 100%;
}

/* 重置列表元素 */
ul, ol { list-style: none; }

/** 重置文本格式元素 **/
a, a:hover { text-decoration: none; }

/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; } /* img 搭车：让链接里的 img 无边框 */
button, input, select, textarea {
    font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}

/* 重置表格元素 */
table { border-collapse: collapse; border-spacing: 0; }
 
/* 重置 hr */
hr {border: none; height: 1px; }
~~~