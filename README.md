### Hexlet tests and linter status:
[![Actions Status](https://github.com/sigilisd/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sigilisd/frontend-project-46/actions)

# Цель

Вычислитель отличий – проект, который по-настоящему прокачивает даже опытных разработчиков. Здесь вам придется столкнуться с принятием сложных архитектурных решений, автоматизированным тестированием и непрерывной интеграцией, функциональным программированием, работе с древовидными структурами данных и рекурсивными алгоритмами.

# Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json

Пример использования:

```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
