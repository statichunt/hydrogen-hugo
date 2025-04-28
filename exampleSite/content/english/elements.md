---
title: "Elements"
description: "Some of our Team members"
draft: false
---

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

<hr>

##### Paragraph

Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.

Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.

<hr>

##### Emphasis

1. Did you come here for something in particular or just general
2. Did you come here for something in **particular**
3. _Did you come here_
4. Did you come here for something in <u>**particular**</u>
5. <u>Did you come here for something in particular </u>
6. Did you come here for ~~something in particular~~
7. URLs and URLs in angle brackets will automatically get turned into links. <u>[http://www.example.com](http://www.example.com)</u> or
8. [http://www.example.com](http://www.example.com) and sometimes example.com (but not on Github, for example).
<hr>

##### Ordered list

1.  you appeared for an instant to be in two places at once.
2.  We have a saboteur aboard.
3.  you appeared for an instant to be in two places at once.

</hr>

##### Unordered list

- Quisque sem ipsum, placerat nec tortor vel, blandit vestibulum libero. Morbi sollicitudin viverra justo
- Blandit vestibulum libero. Morbi sollicitudin viverra justo
- Placerat nec tortor vel, blandit vestibulum libero. Morbi sollicitudin viverra justo
<hr>

##### Code and Syntax Highlighting

###### HTML

```html
<ul>
  <li class="nav-item">
    <a class="nav-link" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="about/">About</a>
  </li>
</ul>
```

<hr>

###### CSS

```css
img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  height: auto;
}
```

<hr>

###### JavaScript

```javascript
window.addEventListener("load", (e) => {
  document.querySelector(".preloader").style.display = "none";
});
```

<hr>

###### Github Gist

{{< gist spf13 7896402 >}}

<hr>

##### Button

{{< button "Button" "#!">}}

<hr>

##### Quote

> “Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once.”

<hr>

##### Notice

{{< notice "note" >}}
This is a simple note.
{{< /notice >}}

{{< notice "tip" >}}
This is a simple tip.
{{< /notice >}}

{{< notice "info" >}}
This is a simple info.
{{< /notice >}}

{{< notice "warning" >}}
This is a simple warning.
{{< /notice >}}

<hr>

##### Tab

{{< tabs >}}
{{< tab "Tab 1" >}}

###### Did you come here for something in particular?

Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.
{{< /tab >}}

{{< tab "Tab 2" >}}

###### I wanna talk about the assassination attempt.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br> <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
{{< /tab >}}

{{< tab "Tab 3" >}}

###### We know you’re dealing in stolen ore

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br> <br>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
{{< /tab >}}

{{< /tabs >}}

<hr>

##### Table

|   #   |    First     |     Last     |    Handle    |
| :---: | :----------: | :----------: | :----------: |
| **1** | Row:1 Cell:1 | Row:1 Cell:2 | Row:1 Cell:3 |
| **2** | Row:2 Cell:1 | Row:2 Cell:2 | Row:2 Cell:3 |
| **3** | Row:3 Cell:1 | Row:3 Cell:2 | Row:3 Cell:3 |

<hr>

##### accordion

{{< accordion "Why should you need to do this?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur
  {{< /accordion >}}

{{< accordion "How can I adjust Horizontal centering" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur
  {{< /accordion >}}

{{< accordion "Should you use Negative margin?" >}}

- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur adipisicing elit.
- Lorem ipsum dolor sit amet consectetur
  {{< /accordion >}}

<hr>

##### Image

{{< image src="images/posts/post-2.jpg" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid w-100" title="image title"  webp="false" >}}

<hr>

##### Gallery

{{< gallery dir="images/gallery" class="" zoomable="true" >}}

### Youtube video

{{< youtube-lite ResipmZmpDU >}}

<hr>

### Custom video

{{< video src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="" >}}
