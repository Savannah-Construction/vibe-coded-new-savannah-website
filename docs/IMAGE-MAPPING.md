# Image mapping The previous generated code moved images into `assets/img/...`. This build fixes that and returns to the original supplied structure: ```text
img/ backlogo.png favicon.png tcc/1.webp team/matt-bw.jpg commercial/tamahrmbcare/a.webp
``` The attached zip had the image files, but some live-site image URLs used different directory names from the supplied zip. To stop broken images, this build creates compatibility copies where required. Examples: | Live-site/code path | Supplied asset copied from | Notes |
|---|---|---|
| `img/commercial/tamahrmbcare/a.webp` | `img/tcc/1.webp` | Exact visual match |
| `img/commercial/waikatothepa/a.jpg` | `img/pa.jpg` | Exact visual match |
| `img/commercial/rotoruaaquatic/a.jpg` | `img/r11.jpg` | Exact visual match |
| `img/team/matt-bw.jpg` | `img/team/matt-bw.JPG` | Case-sensitive server compatibility | Full machine-readable mapping is in: ```text
data/image-compatibility-map.json
``` ## Known caveat The exact live Novotel bedroom image was not obvious in the supplied zip under the same file name. I used the closest supplied Novotel/hospitality asset and created the expected path so the site does not break.
