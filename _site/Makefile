.PHONY: build serve clean

SHELL = /bin/bash
RVM = source ~/.rvm/scripts/rvm && rvm use 3.0.1

build:
	$(RVM) && jekyll build

serve:
	$(RVM) && jekyll serve --livereload

clean:
	rm -rf _site .jekyll-metadata
