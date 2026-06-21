from PIL import Image, ImageDraw, ImageFont

img = Image.open('public/images/hotspot/Mobil_stinger.png').convert('RGB')
draw = ImageDraw.Draw(img)
w, h = img.size

# Draw a grid 10% by 10%
for i in range(1, 10):
    x = int((i/10) * w)
    draw.line([(x, 0), (x, h)], fill=(255, 0, 0), width=1)
    y = int((i/10) * h)
    draw.line([(0, y), (w, y)], fill=(255, 0, 0), width=1)

# Save debug image
img.save('debug_grid.png')

# Let's also print out the bounding box of the STINGER machine
# The machine is dark grey with red text "STINGER"
