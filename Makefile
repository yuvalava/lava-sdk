#!/usr/bin/make -f

# dont forget to adjust tsconfig.json if you want to compile more files.
# entry point shoud always be main.ts

# 1. compile TypeSscript to Javacript 
# 2. convert Node.js Javascript to Browser JS.
# 3. results will be placed in dist directory. 

install: 
	@echo "Npm install"
	@npm install 

build: 
	@echo "starting build" 
	@echo "building typescript"
	@tsc
	@echo "building webpack-cli"
	@webpack-cli
	@echo "build finished."