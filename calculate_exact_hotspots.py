import cv2
import numpy as np

# Load the base image and the visual hotspot image
base_img = cv2.imread('public/images/hotspot/Mobil_stinger.png')
ref_img = cv2.imread('Exist/Panel Semi Overhaul/Visual Hotspot.png')

# 1. Find the base image inside the ref image using template matching
# Wait, base_img is 770x340. ref_img is 1886x834. They are different resolutions!
# The car in ref_img is larger.
# Let's find the scale factor.
# The aspect ratios: 770/340 = 2.2647, 1886/834 = 2.2613.
# The car in ref_img takes up almost the full width, but has black borders.
# Let's just find the bounding box of non-black pixels in ref_img!

# Convert to grayscale
gray = cv2.cvtColor(ref_img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 10, 255, cv2.THRESH_BINARY)
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Find the largest contour (the car)
max_area = 0
best_rect = None
for c in contours:
    area = cv2.contourArea(c)
    if area > max_area:
        max_area = area
        best_rect = cv2.boundingRect(c)

x, y, w, h = best_rect
print(f"Car bounding box in ref_img: x={x}, y={y}, w={w}, h={h}")

# Now we find the yellow circles in ref_img
hsv = cv2.cvtColor(ref_img, cv2.COLOR_BGR2HSV)
lower_yellow = np.array([20, 100, 100])
upper_yellow = np.array([30, 255, 255])
mask = cv2.inRange(hsv, lower_yellow, upper_yellow)
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

centers = []
for contour in contours:
    if cv2.contourArea(contour) > 50:
        M = cv2.moments(contour)
        if M["m00"] != 0:
            cX = int(M["m10"] / M["m00"])
            cY = int(M["m01"] / M["m00"])
            centers.append((cX, cY))

# Filter to the valid 6 centers (some might be text box numbers)
# Let's just print all of them relative to the bounding box.
print("Relative coordinates in bounding box:")
for cx, cy in sorted(centers, key=lambda p: p[0]):
    rel_x = cx - x
    rel_y = cy - y
    pct_x = (rel_x / w) * 100
    pct_y = (rel_y / h) * 100
    print(f"  Absolute: ({cx}, {cy}) -> Relative: ({pct_x:.2f}%, {pct_y:.2f}%)")

