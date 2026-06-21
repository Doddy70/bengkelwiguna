from PIL import Image

ref_img = Image.open('Exist/Panel Semi Overhaul/Visual Hotspot.png').convert('RGB')
w, h = ref_img.size

# Find the bounding box of the car (non-black pixels)
min_x, min_y, max_x, max_y = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b = ref_img.getpixel((x, y))
        if r > 15 or g > 15 or b > 15: # Not pure black
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

box_w = max_x - min_x
box_h = max_y - min_y
print(f"Car bounding box: x={min_x}, y={min_y}, w={box_w}, h={box_h}")

# Now find yellow pixels
yellow_pixels = []
for y in range(h):
    for x in range(w):
        r, g, b = ref_img.getpixel((x, y))
        if r > 200 and g > 180 and b < 50:
            yellow_pixels.append((x, y))

clusters = []
for px, py in yellow_pixels:
    found = False
    for i, cluster in enumerate(clusters):
        cx, cy, count = cluster
        if abs(px - cx) < 50 and abs(py - cy) < 50:
            clusters[i] = ((cx * count + px) / (count + 1), (cy * count + py) / (count + 1), count + 1)
            found = True
            break
    if not found:
        clusters.append((px, py, 1))

valid_clusters = [c for c in clusters if c[2] > 20]

print("Relative coordinates in bounding box:")
for cx, cy, _ in sorted(valid_clusters, key=lambda p: p[0]):
    rel_x = cx - min_x
    rel_y = cy - min_y
    # Ensure it's within the bounding box
    if 0 <= rel_x <= box_w and 0 <= rel_y <= box_h:
        pct_x = (rel_x / box_w) * 100
        pct_y = (rel_y / box_h) * 100
        print(f"  Absolute: ({int(cx)}, {int(cy)}) -> Relative: ({pct_x:.2f}%, {pct_y:.2f}%)")

