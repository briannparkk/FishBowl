# import the necessary packages
from __future__ import print_function
import imutils
from imutils.video import WebcamVideoStream
from imutils.video import FPS

import cv2
import time

import numpy
import tracking_helper
import cropping_helper



counter = 0
boxes = []
prev_time = time.time()

vs = WebcamVideoStream(src=1).start()
fps = FPS().start()

section = 1
xmin = 0
xmax = 853
x_full_min = 160
x_full_max = 1120
lock = 0

while True:

	#print(x_full_max)
	#print(x_full_min)
	
	frame = vs.read()
	frame= cv2.resize(frame, (1280, 720))

	curr_time = time.time()
	if (curr_time - prev_time) > 3:
		counter = 20

	if counter > 0 and lock == 0:
		boxes = tracking_helper.trackHelper(frame)
		#print(boxes)
		counter -= 1
		prev_time = time.time()
		size = numpy.size(boxes)
		print(type(boxes))
		if size > 1:
			section = cropping_helper.crop(boxes)
			lock = 1
			print(section)

	

	if lock == 1:
		#counter -= 1
		if section == 0:
			if x_full_min == 0 and x_full_max == 960:
				lock = 0
			else:
				x_full_min -= 10
				x_full_max -= 10
		elif section == 1:
			if x_full_min == 160 and x_full_max == 1120:
				lock = 0
			elif x_full_min > 160 and x_full_max > 1120:
				x_full_min -= 10
				x_full_max -= 10
			elif x_full_min < 160 and x_full_max < 1120:
				x_full_min += 10
				x_full_max += 10
		elif section == 2:
			if x_full_min == 320 and x_full_max == 1280:
				lock = 0
			else:
				x_full_min += 10
				x_full_max += 10

	

	cropped = frame[0:720, x_full_min:x_full_max]

	cv2.imshow("Frame", cropped)
	if cv2.waitKey(1) == ord('q'):
		break

	# if cv2.waitKey(1) == ord('l'):
	# 	xmin = 320
	# 	xmax = 1280

	# if cv2.waitKey(1) == ord('m'):
	# 	xmin = 160
	# 	xmax = 1120

	# if cv2.waitKey(1) == ord('r'):
	# 	xmin = 0
	# 	xmax = 960

	
	fps.update()


fps.stop()
print("[INFO] elasped time: {:.2f}".format(fps.elapsed()))
print("[INFO] approx. FPS: {:.2f}".format(fps.fps()))

cv2.destroyAllWindows()
vs.stop()


# left = 0 to 960
# mid = 160 to 1120
# right = 320 to 1280