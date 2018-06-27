# htmltoc

Create toc by html code


## install 

```
$ npm i @k.higuchi/htmltoc
```

## usage

以下のHTMLからtocを生成する.

```
<h2>見出し2</h2>
<p>...</p>

<h3>見出し3</h3>
<p>...</p>

<h3>見出し3</h3>
<p>...</p>

<h3>見出し3</h3>
<p>...</p>
```

```
import htmltoc from '@k.higuchi/htmltoc';
var toc = new htmltoc();
toc.deploy('.toc');
```

以下のHTMLを生成し、`.toc`に挿入します。

```
<ul>
    <li><a href="#toc-1">見出し2</a></li>
    <li><a href="#toc-2">見出し3</a></li>
    <li><a href="#toc-3">見出し3</a></li>
    <li><a href="#toc-4">見出し3</a></li>
</ul>
```

また、元のHTMLのhタグにはIDが付与されます。

```
<h2 id='toc-1'>見出し2</h2>
<p>...</p>

<h3 id='toc-2'>見出し3</h3>
<p>...</p>

<h3 id='toc-3'>見出し3</h3>
<p>...</p>

<h3 id='toc-4'>見出し3</h3>
<p>...</p>
```



