import {Category, User, Post} from 'interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

/** Dummy Category data. */
export const sampleCategoryData: Category[] = [
  { id: 1, name :'백엔드'},
  { id: 2, name :'프론트엔드'},
  { id: 3, name :'일상'}
]

export const samplePostData : Post[] = [
  { id : 1, title:'안녕하세요', content :'첫번째 글입니다'},
  { id : 2, title:'어머나?', content :'두번째 글입니다'},
  { id : 3, title:'이럴수가', content :'세번째 글입니다'},
  { id : 4, title:'TypeScript', content :'네번째 글입니다'},
  { id : 5, title:'Java !!', content :'다섯번째 글입니다'},
]
