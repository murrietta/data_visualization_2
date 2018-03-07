from scipy import misc
import matplotlib.pyplot as plt

img = misc.imread("red_bird_man_transparent.png")
img[:10, :10] #shows that the array is now RGBA! That's how to make backgrounds
				#or layers transparent: set their A value to 0.

plt.imshow(img)
plt.show()

rows = [140, 208]
cols = [318, 386]

img[rows[0]:rows[1], cols[0]:cols[1]]

for i in range(rows[0], rows[1] + 1):
	for j in range(cols[0], cols[1] + 1):
		if (img[i, j, 0] == 129 & img[i, j, 1] == 129 & img[i, j, 2] == 129):
			img[i, j, 0] = 255
			img[i, j, 1] = 255
			img[i, j, 2] = 255

misc.imsave("bird2.png", img)