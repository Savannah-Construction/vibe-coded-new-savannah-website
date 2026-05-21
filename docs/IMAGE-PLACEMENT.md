# Image placement

All images used by the current static site are stored under:

```text
assets/img/
```

The HTML files are in the project root, so they reference images like:

```html
<img src="./assets/img/brand/backlogo.png" alt="Savannah Construction">
```

The CSS file is inside `css/`, so CSS image paths go up 1 level first:

```css
background: url("../assets/img/projects/tamahere-country-club.webp") center / cover;
```

## Required image locations

| Repo path used by code | Source path from supplied zip |
|---|---|
| `assets/img/brand/backlogo.png` | `img/backlogo.png` |
| `assets/img/icons/favicon.png` | `img/favicon.png` |
| `assets/img/projects/tamahere-country-club.webp` | `img/tcc/1.webp` |
| `assets/img/projects/waikato-the-pa.jpg` | `img/pa.jpg` |
| `assets/img/projects/novotel-hamilton.png` | `img/gallery2.png` |
| `assets/img/projects/rotorua-aquatic-centre.jpg` | `img/r11.jpg` |
| `assets/img/team/matt-mudgway.jpg` | `img/team/matt-bw.JPG` |
| `assets/img/team/joe-tawha.jpg` | `img/team/joe1.JPG` |
| `assets/img/team/eddie-alford.jpg` | `img/team/eddie-bw.JPG` |
| `assets/img/team/andre-joli.jpg` | `img/team/andre-bw.JPG` |
| `assets/img/team/james-palmer.png` | `img/team/james-color.png` |
| `assets/img/team/kiel-harrison.jpg` | `img/team/kiel-bw.JPG` |
| `assets/img/team/bradley-laird.jpg` | `img/team/bradley-bw.JPG` |
| `assets/img/team/matija-miletic.jpg` | `img/team/matija-bw.JPG` |
| `assets/img/team/lyn-mudgway.png` | `img/team/lyn-bw.png` |

## Important

Do not move these images unless you update the paths in the code.

Do not place raw files in `assets/img`. Keep these out of GitHub:

```text
*.CR3
*.MOV
*.MP4
*.zip
*.log
*.db
```

## Novotel note

The live site image path `img/commercial/novotelhamilton/a.jpg` was not present in the supplied zip under that filename. This package uses `img/gallery2.png` from the supplied zip as `assets/img/projects/novotel-hamilton.png`. Replace it later if you identify the correct Novotel image.
