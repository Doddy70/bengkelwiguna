from PIL import Image

img = Image.open('Exist/Panel Semi Overhaul/Visual Hotspot.png').convert('RGB')
w, h = img.size

# We are looking for bright yellow pixels. Yellow circles have a red dot inside, and concentric yellow rings.
# The core yellow is roughly R=255, G=255, B=0 to R=255, G=200, B=0
# Let's find all pixels that are very yellow.
yellow_pixels = []
for y in range(h):
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        if r > 200 and g > 180 and b < 50:
            yellow_pixels.append((x, y))

# Group adjacent pixels to find the centers
clusters = []
for px, py in yellow_pixels:
    found = False
    for i, cluster in enumerate(clusters):
        cx, cy, count = cluster
        # If within 50 pixels, add to cluster
        if abs(px - cx) < 50 and abs(py - cy) < 50:
            clusters[i] = ((cx * count + px) / (count + 1), (cy * count + py) / (count + 1), count + 1)
            found = True
            break
    if not found:
        clusters.append((px, py, 1))

# Filter out small clusters (noise)
valid_clusters = [c for c in clusters if c[2] > 20]

print(f"Image dimensions: {w}x{h}")
for i, c in enumerate(sorted(valid_clusters, key=lambda x: x[0])):
    cx, cy, _ = c
    pct_x = (cx / w) * 100
    pct_y = (cy / h) * 100
    print(f"Cluster at X={int(cx)} ({pct_x:.1f}%), Y={int(cy)} ({pct_y:.1f}%)")

