// get project folder name 

import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())


const buildFolder = './dist'
const srcFolder = './src'

const path = {
  build: {}, // result folder path
  src: {
    files: ``
  }, // source folder path
  watch: {},
  cleanFolder: buildFolder,
  buidFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}
