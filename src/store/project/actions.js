export function projectSave () {
  return {
    type: 'PROJECT_SAVE'
  }
}

export function projectLoadRequest () {
  return {
    type: 'PROJECT_LOAD_REQUEST'
  }
}

export function projectLoadSuccess (data) {
  return {
    type: 'PROJECT_LOAD_SUCCESS',
    payload: {
      data
    }
  }
}

export function projectFilepathUpdate (filePath) {
  return {
    type: 'PROJECT_FILEPATH_UPDATE',
    payload: {
      filePath
    }
  }
}

export function projectSketchesPathUpdate (path) {
  return {
    type: 'PROJECT_SKETCHES_PATH_UPDATE',
    payload: {
      path
    }
  }
}

export function projectError (message) {
  return {
    type: 'PROJECT_ERROR',
    payload: {
      message
    }
  }
}