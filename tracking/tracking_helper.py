# import the necessary packages
import numpy as np
import cv2
import time
 
# initialize the HOG descriptor/person detector

hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

cv2.startWindowThread()

# open webcam video stream


prev_frame_time = 0
new_frame_time = 0
# the output will be written to output.avi


def trackHelper(frame):
    # Capture frame-by-frame

    # resizing for faster detection
    mod_frame = cv2.resize(frame, (853, 480))
    # using a greyscale picture, also for faster detection
    gray_frame = cv2.cvtColor(mod_frame, cv2.COLOR_RGB2GRAY)

    # detect people in the image
    # returns the bounding boxes for the detected objects
    boxes, weights = hog.detectMultiScale(gray_frame, winStride=(8,8) )

    if type(boxes) == tuple:
        boxes = np.zeros(1)
    #boxes = np.array([[x, y, x + w, y + h] for (x, y, w, h) in boxes])

    return boxes
    


    # Display the resulting frame


# When everything done, release the capture

# and release the output
