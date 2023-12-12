export default {
  currentDate() {
    return new Date().getTime()
  },
  getFullTime() {
    const date = new Date()
    let year = date.getFullYear()
    let month = ('0' + (date.getMonth() + 1)).slice(-2)
    let day = ('0' + date.getDate()).slice(-2)
    let hour = ('0' + date.getHours()).slice(-2)
    let min = ('0' + date.getMinutes()).slice(-2)
    let sec = ('0' + date.getSeconds()).slice(-2)

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  }

  
}
