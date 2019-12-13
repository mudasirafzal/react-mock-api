import data from './data'
import * as uuidv4 from 'uuid/v4'

export const getIdeas = async () => {
  return data
}

export const addIdea = async idea => {
  return idea
}

export const updateIdea = async idea => {
  return idea
}

export const deleteIdea = async idea => {
  return true
}

export const getNewId = async () => {
  return {
    id: uuidv4(),
    created_date: new Date().toUTCString()
  }
}
