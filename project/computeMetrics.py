def computeMetrics(stars):
	"""
	Computes the average, standard deviation and median
	of the distribution of stars of a data set.

	stars = list[(rating,frequency)]
	rating = number of stars
	frequency = number of reviews assigning said number of stars

	output = list[average, standard deviation, median]
	"""

	numRatings = sum([value[1] for value in stars])
	average = float(sum([value[0]*value[1] for value in stars])/numRatings)


	accumulated = 0
	i = 0

	while accumulated <  numRatings/2:
		accumulated += stars[i][1]
		i += 1
	i -= 1
	width = stars[i][1]
	littlePiece = float(numRatings)/2 - accumulated + width
	median = (stars[i][0] - 0.25) + 0.5 * (littlePiece / width)

	standardDev = (float(sum([value[1]*(value[0] - average)**2 for value in stars]))/numRatings)**0.5

	return (average,standardDev,median)
