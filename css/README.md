[Home](../)

# CSS Reference

- [Bootstrap Studio - desktop app](https://bootstrapstudio.io/)
- [YT 19min - 5 CSS mistakes that I see way too often](https://www.youtube.com/watch?v=iHEkRIF7zxI&list=WL)

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Tools

### Bootstrap

The magic of the bootstrap grid - nice article explaining the padding for containers, rows and columns: http://www.helloerik.com/the-subtle-magic-behind-why-the-bootstrap-3-grid-works

Rows always go inside Containers
Columns always go inside Rows
Never nest Containers - not necessary because of the padding conventions defined already.

Containers have 15px padding
Rows have -15px padding (taking edge of row back out to responsive edge)
Columns have 15px padding (taking left and right outtermost column edges to be where the container padding edge is. also giving 30px gutter between columns)

The reason containers have the 15px padding is so the entire body doesn’t have to. A div with a background for example - you would want that going to the responsive edge. But content you would not.

Offsets split gutter widths by the units you specify. very simple.

Push/Pull - uses positioning to flip elements left or right when going from mobile to desktop sizes. It should be used when responsive sizes are changing.

### SASS

### SCSS (Sassy CSS)

### LESS

### CSS Grid

Makes layout easy and simpler for creating different responsive layouts.

##### Color Pickers

- [Google Color Picker](https://g.co/kgs/vfEGQL)

### CSS Box Model:

- MBPC - Margin Border Padding Content
- Margin is outter most
- Border is sandwiched in next
- Padding is next to content
- Margin is like giving the Heisman to adjacent objects
- Padding is like a belt around your objects waist
