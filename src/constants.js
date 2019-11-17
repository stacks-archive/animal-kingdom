import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'cat',
    name: 'Cat',
    superpower: 'Has 9 lives.'
  },
  {
    id: 'dog',
    name: 'Dog',
    superpower: 'Catching frisbees.'
  },
  {
    id: 'lion',
    name: 'Lion',
    superpower: 'Roaring loudly.'
  }]

export const TERRITORIES = [
  {
    id: 'forest',
    name: 'Forest',
    superpower: 'Trees!'
  },
  {
    id: 'tundra',
    name: 'Tundra',
    superpower: 'Let it snow!'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'http://localhost:3001',
    ruler: 'larz.id'
  },
  {
    app: 'https://decentralised-islands.netlify.com',
    ruler: 'yannael_leborgne.id'
  },
  {
      app: 'https://thirsty-jang-0c0a17.netlify.com',
      ruler: 'ma1222042.id.blockstack'
  }
]
