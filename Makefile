#!/usr/bin/make -f

# dont forget to adjust tsconfig.json if you want to compile more files.
# entry point shoud always be main.ts

# "Make Sure You Run Install With sudo"
install: 
	@echo "Make Sure You Run Install With Sudo"
	@echo "Npm install"
	@npm install 
	@echo "Typescript Install"
	@npm install -g typescript
	@echo "WebPack Install"
	@npm install -g webpack-cli


# 1. compile TypeSscript to Javacript 
# 2. convert Node.js Javascript to Browser JS.
# 3. results will be placed in dist directory. 

build: 
	@echo "starting build" 
	@echo "building typescript"
	@tsc
	@echo "building webpack-cli"
	@webpack-cli
	@echo "build finished."