
def crop(boxes):
	first_box = boxes[0]
	x_coord = first_box[0]
	width = first_box[2]
	center = x_coord + (width/2)
	

	if center < 284:
		return 0
	elif center < 569:
		return 1
	else:
		return 2
