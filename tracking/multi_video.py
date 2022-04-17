# import the necessary packages
from __future__ import print_function
import imutils
from imutils.video import WebcamVideoStream
from imutils.video import FPS

import cv2
import time

import numpy
import tracking_helper


def crop(boxes):
	first_box = boxes[0]
	x_coord = first_box[0]
	width = first_box[2]
	center = x_coord + (width/2)
	

	if width < 284:
		return 0
	elif width < 569:
		return 1
	else:
		return 2

counter = 0
boxes = []
prev_time = time.time()

vs = WebcamVideoStream(src=1).start()
fps = FPS().start()

section = 1
xmin = 0
xmax = 853

while True:
	
	curr_time = time.time()
	if (curr_time - prev_time) > 10:
		counter = 10

	if counter > 0:
		boxes = tracking_helper.trackHelper(frame)
		print(boxes)
		counter -= 1
		prev_time = time.time()
		size = numpy.size(boxes)
		if size != 0:
			section = crop(boxes)
			print(section)

	# x,y,x,y

	

	frame = vs.read()
	#print(frame)



	if section == 0:
		cropped = frame[0:720, 0:960]
	elif section == 1:
		cropped = frame[0:720, 160:1120]
	else:
		cropped = frame[0:720, 320:1280] 

	# cropped = frame[0:720, xmin:xmax]


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