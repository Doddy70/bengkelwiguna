import cv2
import numpy as np

# Load image
img = cv2.imread('Exist/Panel Semi Overhaul/Visual Hotspot.png')
h, w = img.shape[:2]

# Convert to HSV to find yellow
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
# Define range of yellow color in HSV
lower_yellow = np.array([20, 100, 100])
upper_yellow = np.array([30, 255, 255])

# Threshold the HSV image to get only yellow colors
mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

# Find contours
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

centers = []
for contour in contours:
    # Filter by area to avoid noise
    if cv2.contourArea(contour) > 50:
        M = cv2.moments(contour)
        if M["m00"] != 0:
            cX = int(M["m10"] / M["m00"])
            cY = int(M["m01"] / M["m00"])
            centers.append((cX, cY))

print(f"Image dimensions: {w}x{h}")
print("Found centers (X, Y):")
for cx, cy in sorted(centers, key=lambda x: x[0]): # sort by X coordinate
    pct_x = (cx / w) * 100
    pct_y = (cy / h) * 100
    print(f"  X: {cx} ({pct_x:.1f}%), Y: {cy} ({pct_y:.1f}%)")
