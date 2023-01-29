export const selectedUpdate = (value, whereAdd, whereDelete) => {
    whereAdd( oldData => [...oldData, value].sort())
    whereDelete( oldData => oldData.filter( data => data !== value).sort())
  }