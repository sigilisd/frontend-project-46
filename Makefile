install:
	npm ci

stylish:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json

plain:
	node bin/gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json

json:
	node bin/gendiff --format json __fixtures__/file1.json __fixtures__/file2.json

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage 

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix