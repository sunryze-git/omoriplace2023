# PLACE OVERLAY CONVERTER
# Converts a standard sized image to now understand context
# that one pixel is now three pixels for the overlay extension.
# Adds a 1px transparent pixel around every normal colored pixel.

# ODD y values are TRANSPARENT
# EVEN y values are PIX -> TRANSPARENT -> PIX -> TRANSPARENT

# Import Libraries
from PIL import Image
import numpy as np

# Load our Image
with Image.open("input.png") as im:
    px = im.load()

# Create our pixel array
output_pixels = []
transparent_pixel = (0, 0, 0, 0)
transparent_line = [transparent_pixel for _ in range(im.width*2)]

for y in range(1,im.height+1):
    inner = []
    for x in range(1,im.width+1):
        inner.append(transparent_pixel)
        inner.append(px[x-1,y-1])
    output_pixels.append(inner)
        
result_array = [item for sublist in zip(output_pixels, [transparent_line] * (len(output_pixels) - 1)) for item in sublist]

array = np.array(result_array, dtype=np.uint8)
new_image = Image.fromarray(array)
new_image.save('output.png')