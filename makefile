

docker:
	docker pull btdavis/website

test: docker
	docker run -it -p 3000:3000 btdavis/website
