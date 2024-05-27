function loadYamlFile(filename) {
  const fs = require('fs')
  const yaml = require('js-yaml')
  const textYaml = fs.readFileSync(filename, 'utf8')
  const textJson = JSON.stringify(yaml.load(textYaml), null, 0) // JSONに変換
  const objJson = JSON.parse(textJson)
  return objJson
}

if (require.main === module) {
  const path = require('path')

  try {
    const objJson = loadYamlFile(path.join(__dirname, './yaml/person.yaml'))
    console.log(objJson)
    console.log(objJson['persons'])
    for (var item in objJson['persons']) {
      console.log(objJson['persons'][item]['id'] + " " + objJson['persons'][item]['name'])
    }
  } catch (err) {
    console.error(err.message)
  }
}
