# import the necessary packages
from __future__ import print_function
from imutils.video import WebcamVideoStream
from imutils.video import FPS
import imutils
import cv2
import time

import numpy
import tracking_helper

counter = 0
boxes = numpy.zeros(shape=(5,2))
prev_time = time.time()

vs = WebcamVideoStream(src=1).start()
fps = FPS().start()

while True:
	
	curr_time = time.time()
	if (curr_time - prev_time) > 10:
		counter = 10

	if counter > 0:
		boxes = tracking_helper.trackHelper(frame)
		print(boxes)
		counter -= 1
		prev_time = time.time()
	


	frame = vs.read()


	cv2.imshow("Frame", frame)
	if cv2.waitKey(1) == ord('q'):
		break

	
	fps.update()


fps.stop()
print("[INFO] elasped time: {:.2f}".format(fps.elapsed()))
print("[INFO] approx. FPS: {:.2f}".format(fps.fps()))

cv2.destroyAllWindows()
vs.stop()


